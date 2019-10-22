
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

// // or WE CAN USE CODE BEYOND BUT THIS IS NOT REQUISTING PUBLIC FOLDER //get request - i would like to get that html from that js file 

// var http = require ('http');
// var server = http.Server(app);
// app.get('/', function (req,res){
// 	res.send('HELLO WORLD!');
// });
// server.listen(process.env.PORT || 3000)

console.log('server running');

var socket = require('socket.io')
// console.log('socket');

//calling funtion socket. io is the particular socket we are pocking out
var io = socket(server);

// 'on' is like 'when' (connection is a specific event for io library)
io.on('connection', newConnection)

function newConnection(socket){

	socket.broadcast.emit('newUser', socket.id + 'has joined the room')

	console.log('new connection: '+ socket.id)
	// when socket.emit ed on the client side - function calls data
	socket.emit('confirmConnection', 'hey I am in' + socket.id)
	socket.on('newMsg', function(data){
		//anything that the user input in the client side, packs it in a package named as data
		socket.broadcast.emit('newMsg', data)
	})
}




