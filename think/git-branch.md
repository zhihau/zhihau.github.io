# use git branch 
[[git]]

## Branch commands
| Command                                          |                                                                  Description |
|--------------------------------------------------|-----------------------------------------------------------------------------:|
| `git branch <branch-name>`                       |                                                                Create branch |
| `git branch`                                     |                                                          Show local branches |
| `git branch -r`                                  |                                                         Show remote branches |
| `git branch -a`                                  |                                           Show all remote and local branches |
| `git checkout <branch-name>`                     |                                                     Switch to another branch |
| `git checkout -b <branch-name>`                  |                                  create and checkout branch at the same time |
| `git branch -d <branch-name>`                    |                                                                delete branch |
| `git diff master..feature`                       |                                                           compare two branch |
| `git show d210c6ccc3 -- svl/inc/svl/itemset.hxx` |                                                     show commit file changed |
| `git show --pretty="" --name-only bd61ad98`      |                                                            show commit files |
| `git show --color --pretty=format:%b eeeba59af`  |                                                        show modified section |
| `git merge master`                               |                                        syn current branch with master branch |
| `git branch -m <new-branch-name>`                | Rename branch(Go to the branch you want to rename then execute this command) |

## dokcer clone branches
 # git clone <URL>
 # git branch -a
 # git checkout <branch-name>


## Reference
* https://clouding.city/git/ignore-tracked/
* https://blog.csdn.net/QH_JAVA/article/details/77979622
* https://www.varonis.com/blog/git-branching
* https://www.nobledesktop.com/learn/git/git-branches
* https://backlog.com/git-tutorial/tw/stepup/stepup2_7.html
* https://gitbook.tw/chapters/branch/merge-with-rebase
* https://hackmd.io/@11CBbBCJRxCUd41WV6p5sg/H1yepvyUw
* https://www.796t.com/content/1544918601.html
* https://gist.github.com/danielestevez/2044589
* https://stackoverflow.com/questions/13787109/how-to-see-changes-to-a-file-before-commit
