# Containerizing-Nodejs-Web-App-Using-Docker
To containerize nodejs app first create a 'Dockerfile' file and '.dockerignore' file.
All info regarding exposed port, images and needed packages will be defined in Dockerfile (As present in files).
'.dockerignore' (As present in files) will contain files which you don't want to include in container image.

To build image:
``` 
sudo docker-build -t  node_build:1.0  .

```
To view all images:
```
sudo docker images
```
To run image:
```
sudo docker run -p 3000:8080 node_build:1.0
```
Use -d for run in background

To see all running images:
```
sudo docker ps
```
To stop a running image:
``` 
sudo docker stop contid
```

