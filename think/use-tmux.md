# use tmux 
[[tmux]] [[terminal]] [[hotkey]]

- [Introduction](#introduction)
- [Pane](#pane)
- [Tabs](#tabs)
- [Sessions](#sessions)

## Introduction
- When you start tmux via `tmux` command, it will create a session.
- A **session** contains many windows. 
- A **window** contains many pane. **Pane** means split window.

## Pane 
| Key                    | Feature                                                                            |
|------------------------|------------------------------------------------------------------------------------|
| `Ctrl-b+%`               | split vertical panes                                                               |
| `Ctrl-b+"`               | split horizontal panes                                                             |
| `Ctrl-b+o`               | switch to next pane                                                                |
| `Ctrl-b+q+#`             | choose # pane to switch                                                            |
| `Ctrl-b+alt+<arrow key>` | adjust pane size                                                                   |
| `Ctrl-d or type "exit"`  | close pane                                                                         |
| `Ctrl-d+[`               | open pane scroll mode. Press PgUp or UpArrow to scroll. Press q to end scroll mode |
| `Ctrl-d+z`               | max pane |

## Tabs 
| Key      | Feature                              |
|----------|--------------------------------------|
| `Ctrl-b+c` | create new tab                       |
| `Ctrl-b+1` | switch to tab 1                      |
| `Ctrl-b+n` | switch to next tab                   |
| `Ctrl-b+w` | show tabs menu                       |
| `Ctrl-b+,` | rename tab then press <Enter> to fin |

## Sessions
| Key      | Feature                              |
|----------|--------------------------------------|
| `Ctrl-b+d` | leave current session and don't close any things. Means detach|
| `tmux a` | attach to previous session |
