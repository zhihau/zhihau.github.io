# use template in gVimPortable
[[vim]]

Create you skeleton files to the directory XX\gVimPortable\Data\settings\templates\skeleton.txt.

Add bellow lines to your vimrc file.

```
augroup templates
  au!
  " read in templates files
  autocmd BufNewFile *.* silent! execute '0r ~\templates\skeleton.'.expand("<afile>:e")
augroup END
```

When you create a new file using **`:e xx.txt`** in command mode, it will auto load the skeleton file via the file extension.
