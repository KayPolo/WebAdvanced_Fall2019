/* To store your JSON file online you can usee http://myjson.com/
 You would get a URL and you can make calls to that URL*/

// You could also use https://jsonlint.com/ to valid the formating of your JSON file. 

// The reason why we preffer to use JSON is because is human readable


// JSON - Stans for Java Script Object Noation 




/*

	1. Understanding how to build an object and call information inside the object.

*/


	// var myData = {"firstName":"Karla", "lastName":"Polo", "age":"30"};

	// console.log(myData);

	// // document.getElementById("json-container").innerHTML = myData.firstName;
	// $(".json-container").append(myData.firstName + " " + myData.lastName + " is " + myData.age + " years ");



/*

	2. creating a data set that contains an array of objects

*/

//  var myData = {"people":[{"firstName":"Karla", "lastName":"Polo", "age":"30"},
//  						{"firstName":"Ann", "lastName":"Marie", "age":"62"}, 
//  						{"firstName":"Chris", "lastName":"Palmer", "age":"25"}]} ;

// console.log(myData);

//  $(".json-container").append(myData.people[0].firstName + " " +myData.people[2].lastName);



 /*

	3. Stringify the JSON Data and converting it back to JSON format

*/
	// var stringpeople = JSON.stringify(myData);
	// console.log(stringpeople);

	// // This can serve to store information, for example in a shopping cart
 	// $(".json-container").append(stringpeople);


 	// To convert the data back to JSON format: 

 	// var backtojson = JSON.parse(stringpeople);
 	// console.log(backtojson);
 	
 	// //This information is not a stering, so it can't be readed by the HTML
 	// $(".json-container").append(backtojson);


 /*

	4. Understanding for loops and pulling data from a json file.

*/
	// $.getJSON( "../data.json", function(data) {

	//   console.log(data.people);

	//   var myUsers = data.people;

	//   console.log(myUsers);

	//   for( var x in myUsers){

	//   	console.log( myUsers[x].firstName + " " + myUsers[x].lastName);

	// 	$(".json-container").append(myUsers[x].firstName + " " + myUsers[x].lastName + "<br>");	

	//   }

	// })