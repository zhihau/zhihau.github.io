# How to instal wsl on windows 10
[[windows]]

<!-- vim-markdown-toc GitLab -->

* [Enviroment](#enviroment)
* [Steps](#steps)
* [Try GUI](#try-gui)
* [How to know my home directory](#how-to-know-my-home-directory)
* [Reference](#reference)

<!-- vim-markdown-toc -->

## Enviroment
- Open cmd to view windows version.
- Or execute command `ver` on console.
- My windows version is **10.0.19045.2364**. If you want to use Linux GUI you
  need on Windows 10 Build 19044+ or Windows 11.

## Steps
1. Run power shell with administrator.
2. Execute command `wsl --install`. It will install Ubuntu automatically.
3. Restart computer to apply. A ubuntu console pops up after you restart computer. It asks your new unix username and password. Type `exit`<ENTER> to leave the console.
4. Search **windows terminal** on windows store. Get it.
5. Open windows terminal and pin it to windows task bar. Now you have a shortcut.

## Try GUI
1. `sudo apt install x11-apps -y`
2. Try command `xcalc`, `xclock`, `xeyes`

## How to know my home directory
1. `cd ~`
2. `explorer.exe .`
3. My home directory is **\\wsl.localhost\Ubuntu\home\adrian**.

## Reference
- https://learn.microsoft.com/en-us/windows/wsl/install
- https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps


