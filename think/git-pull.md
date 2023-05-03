# git pull
[[git]]

If you have a ignored tracked file, you want to make a pull request from remote repository. For example:
the example repository is https://github.com/zhihau/transparent-window.git
o
adrian.shiu@eagle:~/temp/transparent-window$ git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0
Unpacking objects: 100% (3/3), 286 bytes | 286.00 KiB/s, done.
From https://github.com/zhihau/transparent-window
   56eba8d..e459d3a  master     -> origin/master
Updating 56eba8d..e459d3a
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
o

You have to `unignore README.md`.
o

adrian.shiu@eagle:~/temp/transparent-window$ `git pull`
Updating 56eba8d..e459d3a
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
o
`git add README.md`
`git commit -m "add test text to readme file"`
adrian.shiu@eagle:~/temp/transparent-window$ `git pull`

o
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
o
`vi README.md`
~
  MIT
<<<<<<< HEAD
test
=======
  20221007
>>>>>>> e459d3ad32948e31246ee2cdaed74829b815c933
~
modify to 
~
  MIT
~
adrian.shiu@eagle:~/temp/transparent-window$ git add README.md
adrian.shiu@eagle:~/temp/transparent-window$ git commit -m "clear test text from readme file"
[master 46dd5ff] clear test text from readme file
adrian.shiu@eagle:~/temp/transparent-window$ git push
