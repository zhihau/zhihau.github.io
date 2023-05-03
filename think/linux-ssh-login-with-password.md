# linux ssh login with password
[[linux]] [[ssh]]

$ sudo apt-get install sshpass
$ sshpass -p your_password ssh user@hostname

## alias

- `vi ~/.bashrc`

```
alias name='sshpass -p your_password ssh user@hostname'
```
