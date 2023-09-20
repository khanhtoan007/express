const express = require('express'),
http = require('http')
const bodyParse = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();


app.use(bodyParse.json());

app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
});

app.get('/dishes', (req,res,next) => {
    res.end('Will send all dishes to you!');
});

app.post('/dishes', (req,res,next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: '+ req.body.description);
});


app.put('/dishes', (req,res,next) => {
    res.statusCode = 400;
    res.end('PUT operation does not support on /dishes');
});

app.delete('/dishes', (req,res,next) => {
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId+ ' to you');
});


app.post('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 403;
    res.end('Post operation does not support on /dishes/' + req.params.dishId);
});

app.put('/dishes/:dishId', (req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish:' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req,res,next) => {
    res.end('Deleting all dish: ' + req.params.dishId);
});




// app.use((req,res,next) => {
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');


// });

const server = http.createServer(app);

server.listen(port , hostname , () =>{
    console.log(`Server Running at http://${hostname}:${port}/`);
});


