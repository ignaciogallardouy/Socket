let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('Nueva conexión');
    
    // socket.on('coso', () => {
    //     socket.broadcast.emit('NewPlatform');
    // });

    socket.on('JugMovimiento', () => {
        socket.broadcast.emit('movimiento');
    });
});

var port = 2525;

http.listen(port, function () {
    console.log('listening in http://localhost:' + port);
});