# press a key to save and run python script in vim
[[vim]]

Add bellow lines to vimrc file. You need to add double quotes in Windows.
```
map <F5> <Esc>:w<CR>:!"%:p"<CR>
```
