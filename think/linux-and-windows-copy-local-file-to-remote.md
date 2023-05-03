# Linux/Windows copy local file to remote
[[linux]] [[windows]]

- Format: `scp <source-file> <target-file>`.
- It likes move a file to another directory via `mv source target`.
- Or copy a file to another directory via `cp source target`.

## scp
- upload `scp /path/to/local/file remote_user@remote_host:/path/to/remote/file`
- download `scp remote_user@remote_host:/path/to/remote/file /path/to/local/file`

## pscp.exe for windows
- upload  `pscp C:/document/picture.jpg jeremy@8.8.8.8:/home/user/picture.jpg`
- download `pscp jeremy@8.8.8.8:/home/user/picture.jpg c:/document/picture.jpg`
