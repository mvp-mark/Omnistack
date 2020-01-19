const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);
setupWebsocket(server);
mongoose.connect('mongodb://mvp:pass@cluster0-shard-00-00-wxwjc.mongodb.net:27017,cluster0-shard-00-01-wxwjc.mongodb.net:27017,cluster0-shard-00-02-wxwjc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
     useNewUrlParser: true ,
    useUnifiedTopology:true,
    });
// get, post, put, delete
//query params: req.query (Filtros, Ordenação, Paginação, ...);
//Route Params: resquest.params (Identificar um recuso na alteração ou remoção);

//Body: requeste.body (dados para criação ou alteração do registro);

//MongoDB (não-Relacional)
app.use(cors(
    //{origin: 'http://localhost:3000' }
    ));
app.use(express.json());


app.use(routes);


server.listen(3333);