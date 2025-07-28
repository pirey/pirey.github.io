---
title: Better file explorer workflow in neovim
date: 2025-07-26T22:31:21
description: "How this can be more ergonomic than typical file explorer"
tags:
  - neovim
---

Vim comes with a _built-in_ file explorer, that is `:h netrw`. If you're not familiar with it, I highly recommend you to read this post by the legenday [Drew Neil](http://vimcasts.org/blog/2013/01/oil-and-vinegar-split-windows-and-project-drawer/). In that post, he give us an insight of how `netrw` is different than typical file explorer plugins.

I tried to use `netrw` with tpope's [vinegar](https://github.com/tpope/vim-vinegar) but I feel the need to customize it in a lot of aspects. Instead of doing too much customizatiion, I decided to switch to [oil.nvim](https://github.com/stevearc/oil.nvim). It provide a simpler way to manage files by creating a special buffer when we `:edit <directory>`. We can can edit the buffer to add files, rename, and delete, and when we `:write` the buffer, it will calculate the needed operation and do it for us.

By default, oil.nvim provide some keymaps but I particularly like the one to open parent directory, `-`, which is the same as `netrw` and `vim-vinegar`. Since the keymap only available on `ft=oil` buffer, I added the keymap globally so I have a single keymap to go _up_.

<video
  src="./oil.mp4"
  controls
  width="100%"
  style="max-height: 500px;"
/>


When I work on a project, I usually need to quickly jump into a directory browse files there, or maybe open a terminal If needed. The idea that comes to my mind was to _fuzzy find_ a directory with a fuzzy finder, then open it as a regular file buffer (thanks to oil.nvim).

I am currently using an `fzf` wrapper named [fzf-lua](https://github.com/ibhagwan/fzf-lua) as fuzzy finder. It provide a simple way to define custom picker, i.e. a directory picker. It require external dependencies such as `fzf` and `fd` but it is not quite a problem since I also use them outside of neovim. I can probably use another fuzzy finder with less external dependencies, but I am content with what I currently have.

To create the picker, we can call the exposed api function and provide external command to populate the result `require("fzf-lua").fzf_exec("fd --type d", opts)`. We can define custom action for this picker but I'm using the default file picker actions. Here's my `lazy.nvim` spec.

```lua
{
  "ibhagwan/fzf-lua",
  cmd = { "FzfLua" },
  keys = {
    -- ... other keymaps
    {
      "<leader>d",
      function()
        local fzf = require("fzf-lua")
        fzf.fzf_exec("fd --type d", {
          actions = fzf.defaults.actions.files,
        })
      end,
    },
  },
  -- ... other options
}

```

This way, we can fuzzy find directories, then open it in a split, or a new tab. We can then define a custom keymap for `oil` buffer to open terminal in that directory. Here's my `lazy.nvim` spec.

```lua
{
  "stevearc/oil.nvim",
  lazy = false,
  opts = {
    view_options = { show_hidden = true },
    keymaps = {
      ["<localleader>t"] = { "actions.open_terminal", mode = "n" },
    },
  },
  keys = {
    { "-", "<cmd>Oil<cr>" },
    { "<leader>-", "<cmd>Oil .<cr>" },
  },
}
```

I'm quite happy with this setup because it is more ergonomic than my workflow with typical file explorer plugins. Here's a little clip showing the workflow.

<video
  src="./dir-picker.mp4"
  controls
  width="100%"
  style="max-height: 500px;"
/>
