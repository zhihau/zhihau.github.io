# use cron to automate on ubuntu
[[linux]]

## Summary
- Cron is a job scheduler
- Install cron , `apt install cron`
- It doesn't restart when a crontab file modified.
- The command **crontab** allows the user to modify entries to cron.

## Use crontab
1. Edit entries with `crontab -e`
2. Add below lines to crontab file
```
# Every minute write hello world to greetings.txt file.
* * * * * echo “Hello World at $(date)” >> $HOME/greetings.txt
```
3. `Tail $HOME/greetings.txt`

# Cron job syntax
- [min] [hour] [ay of month] [month] [day of week] [command]
- field|values|
- [min]|0-59|
- [hour]|0-23|
- [day of month]|1-31|
- [month]|1-12|
- [day of week]|0-6|
- *|Every allowed value(minute)|
- 0-5|0th-5th minute|

# Why is the cron jobs not running
- `su user`
    - if you would like to run cron jobs with a user account
- check cron service `service cron status`
    - if it doesn't run, run via `service cron start`
- check the cron job was loaded `crontab -l`
- edit the cron jobs `crontab -e`
```
* * * * * echo “Hello World at $(date)” >> $HOME/greetings.txt
```
- # `tail  $HOME/greetings.txt`

## Important 
if you edit cron job with vim, please **quit** vim to load the cron jobs.

# Reference
- https://blog.csdn.net/liaoyanyunde/article/details/86572370
- https://askubuntu.com/questions/1165969/ubuntu-18-04-on-wsl-cron-daemon-not-running-after-reboot
- https://askubuntu.com/questions/1241397/ubuntu-20-04-service-autostart
- https://www.cherryservers.com/blog/how-to-use-cron-to-automate-linux-jobs-on-ubuntu-20-04
- https://www.geeksforgeeks.org/tail-command-linux-examples/
- https://stackoverflow.com/questions/66314858/how-we-can-see-all-running-services-linux-machine
- https://askubuntu.com/questions/390201/how-to-see-login-history
- [Why is the cron jobs not running](https://blog.51cto.com/u_15615469/5256396)

