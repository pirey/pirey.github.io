---
title: Migrating from lazy.nvim to vim.pack
date: 2026-01-24T08:10:05
description: "Towards the neovim out of the box experience"
tags:
  - neovim
---

Neovim announced the new vim.pack module in version 0.12 which provides a way to install and manage plugins out of the box.
At the time of this writing, version 0.12 is not released yet, but we can already use it by using the nighly builds of neovim.

## Overview

I'm a big fan of lazy.nvim (and other works by [folke](https://github.com/folke) in general), especially its capability to define plugin specifications in a modular way.
With lazy.nvim, I can define a plugin source, dependencies, keymaps, and other initialization in an organized way, isolated from other plugin specs.

Here's an example of a plugin specification for [vim-dadbod-ui](https://github.com/kristijanhusak/vim-dadbod-ui) using lazy.nvim:

```lua
-- setup lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if vim.fn.isdirectory(lazypath) == 0 then
  local lazyrepo = "https://github.com/folke/lazy.nvim.git"
  vim.fn.system({ "git", "clone", "--filter=blob:none", "--branch=stable", lazyrepo, lazypath })
end
vim.opt.rtp:prepend(lazypath)

-- plugin spec
local other_plugin = {
  -- ...
}
local dadbod_ui = {
  "kristijanhusak/vim-dadbod-ui",
  dependencies = {
    { "tpope/vim-dadbod", lazy = true },
    { "kristijanhusak/vim-dadbod-completion", ft = { "sql", "mysql", "plsql" }, lazy = true },
  },
  cmd = { "DBUI" },
  keys = {
    { "<leader>s", "<Plug>(DBUI_ExecuteQuery)<Cmd>write<CR>", ft = { "sql", "mysql", "plsql" } },
  },
  init = function()
    vim.g.db_ui_execute_on_save = 0
  end,
}

-- load plugins
require("lazy").setup({
  spec = {
    dadbod_ui
    other_plugin,
    -- ... more plugins
  }
})
```

It specifies plugin source, dependencies, trigger command (lazy load), keymap, and initialization function.
What I like about this approach is that if we have a lot of plugins to manage and configure, we can focus on one plugin at a time.

The only drawback of this approach is the fact that lazy.nvim is not a built-in feature and we need additional step to set it up (see the setup section at the top of the file), which is not really a downside but more of a preference.

## Vim.pack usage

Now vim.pack is not as fully featured as lazy.nvim and tends to be more simple. There is no lazy loading, no direct keymap definition in the plugin spec, and no initialization function.

Here's an equivalent plugin specification for [vim-dadbod-ui](https://github.com/kristijanhusak/vim-dadbod-ui) using vim.pack:

```lua
-- plugin specs
vim.pack.add({
  -- ... other plugins

  -- dependencies
  { src = "https://github.com/kristijanhusak/vim-dadbod" },
  { src = "https://github.com/kristijanhusak/vim-dadbod-completion" },
  -- the plugin
  { src = "https://github.com/kristijanhusak/vim-dadbod-ui" },
})

-- separate section for plugin configuration
setup(function()
  vim.g.db_ui_execute_on_save = 0
  vim.api.nvim_create_autocmd("FileType", {
    pattern = { "sql", "mysql", "plsql" },
    callback = function()
      vim.keymap.set("n", "<leader>s", "<Plug>(DBUI_ExecuteQuery)<Cmd>write<CR>", { silent = true })
    end,
  })
end)
```

The key difference is that the src field is a full URL to the plugin source, and we must configure the plugin separately outside of the plugin spec, which makes it not as modular.

One thing to note is lazy.nvim provide an easy way to define keymaps for specific filetypes, but vim.pack does not have that feature, so we need to do it manually using vim.api.nvim_create_autocmd.

Then, since there is no lazy loading, we skipped the _cmd_ field.

## Making vim.pack plugin specification modular

Currently, the vim.pack.Spec does not provide a way to define plugin configuration, but we can create a helper to make it modular.

The idea for modular plugin spec is inspired by lazy.nvim plugin specification, but it has many features and full re-implementation it is not a primary goal.

Here's what the modular plugin spec would look like:

```lua
local dadbod_ui = {
  src = "kristijanhusak/vim-dadbod-ui",
  dependencies = {
    { src = "tpope/vim-dadbod" },
    { src = "kristijanhusak/vim-dadbod-completion" },
  },
  config = function()
    vim.g.db_ui_execute_on_save = 0
    vim.api.nvim_create_autocmd("FileType", {
      pattern = { "sql", "mysql", "plsql" },
      callback = function()
        vim.keymap.set("n", "<leader>s", "<Plug>(DBUI_ExecuteQuery)<Cmd>write<CR>", { silent = true })
      end,
    })
  end,
}
```

We added dependencies and config field to the plugin spec, those two are enough to make the plugin modular.

The config field is a function that can be used to define keymaps, autocmds, initialization, etc.

The dependencies field is not really mandatory, but we added it because it makes the plugin spec more explicit about what the plugin depends on, hence it is more modular.

We want to call vim.pack.add() with all the plugin specs, then we call the config function for each plugin spec.

Also notice that we don't use full URL for the src field, because most of the plugins are hosted on GitHub, so we can create a helper function to normalize the URL and use github.com as the fallback.

Here's the implementation for the helper function:

```lua
---@class SpecExt : vim.pack.Spec
---@field config function
---@field dependencies vim.pack.Spec[]

---@param src string
---@return string
local function normalize_src(src)
  if src:match("^[a-z]+://") then
    return src
  end
  return "https://github.com/" .. src:gsub("^/", "")
end

---@param specs_ext SpecExt[]
function setup_specs(specs)
  local specs = {}
  local configs = {}

  -- resolve specs and configs
  for _, spec in ipairs(specs_ext) do
    if spec.dependencies then
      for _, dep in ipairs(spec.dependencies) do
        table.insert(specs, { src = normalize_src(dep.src), version = dep.version })
      end
    end
    table.insert(specs, vim.tbl_extend("force", spec, { src = normalize_src(spec.src) }))
    if spec.config then
      table.insert(configs, spec.config)
    end
  end

  -- install packages
  vim.pack.add(specs)

  -- configure packages
  for _, config in ipairs(configs) do
    config()
  end
end
```

Finally, we can use the setup_specs function to install and configure the plugins:

```lua
setup_specs({
  dadbod_ui,
  other_plugin,
  -- ... more plugins
})
```

## Conclusion

vim.pack is a great addition to neovim, but lazy.nvim might be a better choice in some cases.

I like to keep my neovim configuration simple and minimal, so vim.pack is definitely a good choice for me.
