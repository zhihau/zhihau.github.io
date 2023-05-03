# Use tag
[[git]]

| Command                                                                        | Description           |
|--------------------------------------------------------------------------------|-----------------------|
| `git tag`                                                                      | List all tags         |
| `git tag -l "*v1.*"`                                                           | List tags by patten   |
| `git tag -a v1.4 -m "my version 1.4"`                                          | Create annotation tag |
| `git show v1.4`                                                                | View tag information  |
| `git tag YYYY-MM-<project-name>_v1.0.0_YYYY-MM-dd_<last-commit-id-8-chars>`    | Example               |
| `git tag -d <tag-name>`                                                        | Delete tag            |
| `git tag <tag-name>`                                                           | Create tag (lightweight tag,no option -a) |
| `git push -delete origin <tag-name>`                                           | Delete remote tag or  |
| `git push origin :<tag-name>`                                                  | Delete remote tag     |
| `git push origin <tag-name>`                                                   | Push tag              |

# `git show v1.4`  example
	{{{
	tag v1.4
    Tagger: Ben Straub <ben@straub.cc>
    Date:   Sat May 3 20:19:12 2014 -0700

    my version 1.4

    commit ca82a6dff817ec66f44342007202690a93763949
    Author: Scott Chacon <schacon@gee-mail.com>
    Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
	}}}

# `git show v1.4-lw` example - lightweight tag
    {{{
    commit ca82a6dff817ec66f44342007202690a93763949
    Author: Scott Chacon <schacon@gee-mail.com>
    Date:   Mon Mar 17 21:52:11 2008 -0700
    }}}
