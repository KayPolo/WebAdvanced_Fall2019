var information = "Hello people";

console.log("Hello");

alert("Greetings" + " "+information);


//document.write("<p>"+ information + "</p>");

var atributes = ["Blue" , "Green", "Yellow"];

//console.log(atributes[1]);

var myMSG = document.getElementsByClassName('msg');

for (var i = 0; i< atributes.length; i++){
    console.log(atributes[i]);

	for (var i = 0; i< myMSG.length; i++) {
	myMSG[i].innerHTML = atributes[i];
	}
}