# postgresql copy database in the same server
[[database]]

1. Find db client connections
```
SELECT pid, usename, client_addr 
FROM pg_stat_activity 
WHERE datname ='sourcedb';
```
2. Terminate client connections
```
SELECT pg_terminate_backend (pid)
FROM pg_stat_activity
WHERE datname = 'sourcedb';
```
3. Copy database
```
CREATE DATABASE targetdb 
WITH TEMPLATE sourcedb;
```
cf. https://www.postgresqltutorial.com/postgresql-administration/postgresql-copy-database/
