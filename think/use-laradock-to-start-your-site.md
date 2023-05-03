#  use laradock to start your site
[[laravel]] [[docker]]

## Steps
1. ~$ `git clone https://github.com/Laradock/laradock.git`
1. ~$ `cd laradock`
1. laradock$ `cp .env.example .env`
1. Add following lines to .env
```
DB_HOST=mysql
REDIS_HOST=redis
QUEUE_HOST=beanstalkd
```
1. laradock$ Execute `docker-compose up -d nginx mysql phpmyadmin redis workspace` command to start services
1. laradock$ mkdir ../public
1. laradock$ vi ../public/index.html
```
<html>
<body>
 <h1>hello world</h1>
</body>
</html>
```
1. open your browser and go to **localhost**
## Change home directory
vi .env
```
APP_CODE_PATH_HOST=../project-z/
```
## Reference
- [Follow this guide to start laradock](https://laradock.io/)
