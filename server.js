const express = require("express")

const PORT="8080";
const HOST="0.0.0.0";

const app = express();
app.get('/', (req,res) => {
    res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//sudo docker-build -t  node_build:1.0  .
//sudo docker images
//sudo docker run -p 3000:8080 node_build:1.0
//sudo docker ps
//sudo docker stop contid
// -d for run is background