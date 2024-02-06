const { Socket } = require('engine.io');

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);


io.on('connection', (socket) => {

});

var port = 2525;

http.listen(port, function(){
    console.log('Se esta escuchando localhost:'+port);
});