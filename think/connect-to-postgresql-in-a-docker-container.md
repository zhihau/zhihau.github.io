# connect to postgresql in a docker container
[[database]]

docker exec -it 05b3a3471f6f bash
root@05b3a3471f6f:/# psql -U postgres
postgres-# CREATE DATABASE mytest;
postgres-# \q

cf. https://stackoverflow.com/questions/37694987/connecting-to-postgresql-in-a-docker-container-from-outside
