var socket, myColor, mySize;
function setup(){
	createCanvas(600,400);
	background(51)
	socket = io()
	socket.on('mouse', newDrawing)
	myColor = [random(255), random(255), random(255)]
	mySize = random(10,70)
}

function newDrawing(data){
	noStroke();
	fill(data.color[0],data.color[1],data.color[2]);
	ellipse(data.x, data.y, data.size, data.size)
}

function mouseDragged(){
	console.log(mouseX + ', ' + mouseY)
	var data = {
		x: mouseX,
		y: mouseY,
		color: myColor,
		size: mySize
	}
	socket.emit('mouse', data)

	noStroke();
	fill(myColor[0], myColor[1], myColor[2]);
	ellipse(mouseX, mouseY, mySize, mySize)
}