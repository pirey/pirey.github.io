---
title: Trying GNU Emacs part 1
date: 2025-07-11.23T10:49:58
description: "This is my attempt to use the glorious GNU program, that is GNU Emacs."
tags:
  - emacs
---

This is my attempt to learn to use the glorious GNU program, that is GNU Emacs.

I am a vim enthusiast, so I definitely have a bias towards it and will compare Emacs with vim in my subconscious.

## Installation

At the time of writing this document, I'm using macOS Sequoia 15.5 on a Macbook Pro M4 and Emacs version 30.1, so here is some installation step specifically for this machine.

There are several options that we can choose to use Emacs on macOS:

https://emacsformacosx.com/ - This is the simplest way to install Emacs on macOS system, just regular drag and drop to Applications folder and it's done.

[Homebrew emacs](https://formulae.brew.sh/formula/emacs) - Install Emacs using homebrew.

[emacs-plus](https://github.com/d12frosted/homebrew-emacs-plus) - This is another homebrew package but I noticed a lot of people recommended this if we want a more feature complete Emacs on macOS.

I tried all of them but I don't see any major difference because I'm just getting started and have no idea of what I'm missing or not. So if we're just getting started, I believe it is safe to use either of them.

> NOTE: when I install emacs-plus, it will build emacs from source and I noticed the spike of CPU usage on my machine, it was so intense it is the first (only) time since I bought the machine that the fan start to spin real hard I started to worry.
> The build finished about 30 minutes or so.

## Getting Started

Emacs provide a quick guided tutorial similar to `vimtutor` that we can access by pressing `C-h t` (that is `Control + h then t`).

And it has a very extensive built-in user manual that we can access by pressing `C-h r`.

For a quick reference there is also `C-h ?`.

Most (all?) of the keybinding on emacs are translated to `Emacs Lisp` function calls. For example pressing `C-f` and `C-b` will invoke `forward-char` and `backward-char` function respectively. We can also run the functions manually by using `M-x` (that is `Meta + x` or `Alt + x`) from which we can enter the function name to call.

`M-x` is different than `vim` command mode, because we cannot call command/function along with its arguments in one go but instead do it in a more interactive way, i.e. enter function name, then prompt us with arguments if needed.

For example, to change the theme, the expession in `Emacs Lisp` is `(load-theme 'theme-name)`. Using `M-x` it is two step, first enter `M-x load-theme RET` then `theme-name RET`.

Emacs provide a way to directly evaluate any expression using `M-:`. Again, this is also different than `vim` command mode because it is more like a `REPL` or lisp expression evaluator.


## Configuration

Emacs read configuration from multiple places. 

Some that I know are `~/.emacs`, `~/.emacs.d/init.el`, `~/.config/emacs/init.el`.

The configuration is written in `Emacs Lisp`.

To set an option variable we use `setq`.

```elisp
; Allow scroll to top/bottom of a buffer
(setq scroll-error-top-bottom t)
```

To check out help file of a variable we can use `C-h v` then enter the variable name, or if the cursor is on top of a variable we can press `C-h v RET`.

Some of the configuration can be set by calling functions.

```elisp
(menu-bar-mode -1)
(tool-bar-mode -1)
(scroll-bar-mode -1)
(global-hl-line-mode 1)
```

Similarly, to check out help file of a function we can use `C-h f` then enter the variable name, or if the cursor is on top of a variable we can press `C-h f RET`.

## Packages

Emacs provide a package manager called `package.el`. This module provide functions to manage Emacs packages interactively.

By default Emacs will try to download packages from gnu and nongnu repository, specified in `package-archives` variable.

We can add more repository to download packages from, for example [MELPA](https://melpa.org) is a popular one.

```elisp
(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)
```

We call call `package-refresh-contents` to re-index available packages.

### Installing Package

To install a package, we can browse available packages using `list-packages` then use the interactive menu from there to install each package.

We can also specify it in our config file by calling the `package-install` manually. But we also need to check if they're not installed already, using `package-installed-p` function.

```elisp
(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)

(unless package-archive-contents
  (package-refresh-contents))

(dolist (pkg '(spacemacs-theme evil magit))
  (unless (package-installed-p pkg)
    (package-install pkg)))

;; theme
(load-theme 'spacemacs-dark t)

;; evil mode
(setq evil-want-C-u-scroll t)
(require 'evil)
(evil-mode 1)

;; magit
(require 'magit)

;; org
(require 'org)
(setq org-agenda-files (directory-files-recursively "~/org" "\\.org$"))
(global-set-key (kbd "C-c a") #'org-agenda)
(global-set-key (kbd "C-c c") #'org-capture)
```

We can also use the `use-package` macro to make it tidy.

```elisp
;; setup packages
(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)

(unless package-archive-contents
  (package-refresh-contents))

;; bootstrap use-package
(unless (package-installed-p 'use-package)
  (package-install 'use-package))
(require 'use-package)
(setq use-package-always-ensure t)

;; themes and packages
(use-package spacemacs-theme
  :config
  (load-theme 'spacemacs-dark t))

(use-package evil
  :init
  (setq evil-want-C-u-scroll t)
  :config
  (evil-mode 1))

(use-package magit)

(use-package org
  :init
  (setq org-agenda-files (directory-files-recursively "~/org" "\\.org$"))
  :bind (("C-c a" . org-agenda)
         ("C-c c" . org-capture)))
```

### Packages Quirks

When we install a package, Emacs will modify and add at the end of config file with some "custom" section.

To avoid this, we can set `custom-file` variable to let emacs modify that file instead.

```elisp
(setq custom-file "~/.emacs-custom.el")
```

### Other Package Manager

There are other package manager available but I haven't tried any of them.

- [straight.el](https://github.com/radian-software/straight.el)
- [elpaca](https://github.com/progfolio/elpaca)

## Appendix

There are also Emacs _distro_ which configure Emacs for us, only two that I'm aware of (there are others) so far.

- [doom](https://github.com/doomemacs/doomemacs)
- [spacemacs](https://www.spacemacs.org/)

I have tried to install spacemacs long time ago, but the only thing I can remember is that it was slow as hell, but I'm sure it has changed since then (or not, who knows?).

I have also recently tried to install doom emacs. While it mostly works, I don't like the fact that I don't get the experience of using Emacs because most of the feature feels like magic. This is of course because my lack of experience, and that is why I want to have the real experience.
