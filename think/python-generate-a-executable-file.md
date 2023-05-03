# python generate a executable file
[[python]]

```
python -m pip install pyinstaller
pyinstaller -F .\hello.py -i search.ico -c --onedir --onefile --clean --noupx
```
It will generate an executable file in dist folder. If the executable file needs some config files for executing. You have to copy them to the dist folder.
If I add -w option, pyinstaller generates an error message Error loading Python DLL: C:\Users\Afro\AppData\Local\Temp_MEI51322\python35.dll(error code 193). I don’t know why.
Reference [error-when-creating-executable-file-with-pyinstaller](https://stackoverflow.com/questions/38811966/error-when-creating-executable-file-with-pyinstaller)
