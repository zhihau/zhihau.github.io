# git Ignore files
[[git]]

## ignore untracked files=
View untracked files via `git status`. For example:
o
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        note.txt
o
vi .gitignore
~
note.txt
~
## ignore tracked files=
View untracked files via `git status`. For example:
o
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   note.txt
o
$ git update-index --skip-worktree note.txt
show ignore files
$ git ls-files -v | grep ^S
o
S note.txt
o
to unignore files
$ git update-index --no-skip-worktree note.txt

----
vi .bashrc
~
alias ignore='git update-index --skip-worktree'
alias unignore='git update-index --no-skip-worktree'
alias ignored='git ls-files -v | grep ^S'
~

