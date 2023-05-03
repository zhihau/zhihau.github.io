# Install NERDTree file manager vim plugin and bind a key
[[vim]]

- Reference [[how-to-install-a-vim-plugin.md]].
- Add lines to vimrc file.
```
:map <F7> :NERDTreeToggle %<CR>
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'
call plug#end()
```
- :`so %` to reload setting file.
- :`PlugInstall` to install plugin. 
- :`q` to leave plugin install window
- You have to edit a file via vi.
- Then, you can press **<F7>** to toggle NERDTree file manager.

