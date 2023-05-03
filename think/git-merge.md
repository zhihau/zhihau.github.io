# Use git merge
[[git]]

* Switch to master branch via `git checkout master` 
* `git merge <branch-name>`
* Use `git push --set-upstream origin <branch-name>` to push branches to remote repository. Origin is an alias for a remote repository.
* Or use `git push -u origin <branch-name>`. `-u` short for `--set-upstream` once to initiate tracking. The upstream configuration will be saved to git-config.
* Or use `git push -u origin HEAD`. Push the current branch to the same name on the remote
* `git push` for the current branch. or use `git push <branch-name>`
* `git remote -v` to show all remotes. Remote is a pair of data. For example, origin git@github.com:git/git.git
* `git remote add <remote-alias> <git-url>` add alias to remotes.

## Update branch with master
- `git checkout target_branch`
- `git merge origin/master`

## Fix merge conflict
- $ git merge issue3
CONFLICT (content): Merge conflict in myfile.txt
- $ vi myfile.txt
- $ git add myfile.txt
- $ git commit -m "合併issue3"

## Real case
	* Create a int_2022-06-21_branch
	* int_branch for multiple developers
	* integrate all int_branch and test, If all bugs fixed.
	* start merge to master
	* then [tag](git-tag.md) the source code ( release / tag need to checkout master.)
	* release
	* and deploy to your production/sandbox.
