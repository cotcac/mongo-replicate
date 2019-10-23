# Mongodb replica with docker
## Credit and reference:
http://www.tugberkugurlu.com/archive/setting-up-a-mongodb-replica-set-with-docker-and-connecting-to-it-with-a--net-core-app


![Alt][1]

[1]: /diagram.png "Title"
# Quick start

## Start Mongo replica

Create a docker network
```
docker network create my-mongo-cluster
```
Create 3 Mongo Nodes
```
docker run --name mongo-node1 -d --net my-mongo-cluster mongo --replSet “rs0"
docker run --name mongo-node2 -d --net my-mongo-cluster mongo --replSet “rs0"
docker run --name mongo-node2 -d --net my-mongo-cluster mongo --replSet “rs0"
```

config
```
docker exec -it mongo-node1 mongo

```
run this in mongo of node1
```
config = {
      "_id" : "rs0",
      "members" : [
          {
              "_id" : 0,
              "host" : "mongo-node1:27017"
          },
          {
              "_id" : 1,
              "host" : "mongo-node2:27017"
          },
          {
              "_id" : 2,
              "host" : "mongo-node3:27017"
          }
      ]
  }

```
Then
```
rs.initiate(config)
```
check config
```
rs.status()
```


# NodeJS Application


```
docker-compose build .
docker-compose up
```

# Api

## Create a post 
http://localhost:3000/insert?title=abc

## List all posts
http://localhost:3000/

# Some useful Docker CLI

```
docker stop mongo-node3 # stop a container
docker start mongo-node3 # start a container
docker exec -it mongo-node2 mongo # mongo cli in a container
mongo> rs.status() # check replicate config and health check.

```
# Try

If you kill 1/3 mongo-node. 1 of the replicate will be a primary and not affect the app.  
If you kill 2/3 mongo-node. IT will die.






