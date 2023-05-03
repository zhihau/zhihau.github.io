# Install auto save vim plugin 
[[vim]]

- Reference [[how-to-install-a-vim-plugin.md]].
- Add lines to vimrc file.
```
let g:auto_save = 1
call plug#begin('~/.vim/plugged')
Plug '907th/vim-auto-save'
call plug#end()
```
- :`source %` to reload the setting file vimrc.
- :`PlugInstall` we can use the command to install plugin
- :`q` to leave plugin install window
- The advantage is that you don't need to write file via :`wq`.

