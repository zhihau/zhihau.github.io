# How to install a vim plugin
[[vim]] [[plugin]]
<!-- vim-markdown-toc GitLab -->

* [Remember](#remember)
* [Related](#related)

<!-- vim-markdown-toc -->

1. Install [vim-plug](https://github.com/junegunn/vim-plug).
2. Download plug.vim or execute `wget https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`.  Or `curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`
2. Put plug.vim in the **autoload** directory. If the folder doesn't exist, create one with `mkdir ~/.vim/autoload`.
3. Add vim-plug tags in vimrc file and put you'd like to install plugin between these tags. For instance, I want to install nerdtree plugin. The vimrc looks like this.
```
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'
call plug#end()
```
4. Next, restart vim or execute command `so %` in the command mode to reload the setting file **vimrc**.
5. Run command `PlugInstall` to install plugins.
5. :`q` to leave plugin install window

# Remember
**If you don't want to install any plugin and commet it in the plug block, it will not take effect. You need to remove this line or move this line outside the plug block.**

# Related
- [[how-to-install-a-vim-plugin.md]]
- [[how-to-install-NERDTree-file-manager-vim-plugin.md]]
- [[how-to-install-auto-save-vim-plugin.md]]
