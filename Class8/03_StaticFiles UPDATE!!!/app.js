
// first include express node module
var express = require('express');

// define express function as a variable called app
var app = express();

//you should listen port 3000 - this is important if there is a specified port finds it otherwise uses port 3000
var server = app.listen(process.env.PORT || 3000);

//a function that - a simplified version of saying when someone goes to the port serve the folder 'public'
//your public folder will include your html/css/ and js files 
//if we use static we dont use http library
app.use(express.static('public'))
console.log('server running');


var socket = require ('socket.io')
var io = socket(server);

io.on('connection', newConnection)

function newConnection(socket){
	socket.broadcast.emit('newUser', socket.id + 'has joined to chat');
	console.log('new connection: ' + socket.id)
	socket.emit('confirmConnection', 'hey I am in' + socket.id);
	socket.on('newMsg', function(data){
		socket.broadcast.emit('newMsg', data)
	})
}





