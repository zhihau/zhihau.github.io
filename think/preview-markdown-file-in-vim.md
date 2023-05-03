# preview-markdown-file-in-vim
[[vim]] [[markdown]]

Add this to vimrc file. If you want to a live preview, you need to install [Markdown Preview Plus](https://chrome.google.com/webstore/detail/markdown-preview-plus/febilkbfcbhebfnokafefeacimjdckgl) extension to Chrome. Then set **allow access to file URLs** option enabled in the extension’s details page.
```
" Open markdown files with Chrome.
autocmd BufEnter *.md,*.markdown exe 'noremap <F5> :!start "C:\Users\tomas\AppData\Local\Google\Chrome\Application\chrome.exe" "%:p"<CR>'
```
