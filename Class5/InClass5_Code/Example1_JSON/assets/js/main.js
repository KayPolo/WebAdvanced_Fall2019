/* To store your JSON file online you can usee http://myjson.com/
 You would get a URL and you can make calls to that URL*/

// You could also use https://jsonlint.com/ to valid the formating of your JSON file. 

// The reason why we preffer to use JSON is because is human readable


// JSON - Stans for Java Script Object Noation 




/*

	1. Understanding how to build an object and call information inside the object.

*/

	// let myData = 

	
	// console.log(myData);

	// // $(".json-container").append(myData.people[0].firstName + " "+ myData.people[1].lastName+ " " + "is"+ " " + myData.people[2].age);

	// // $(".json-container").append(myData);

	// let stringpeople = JSON.stringify(myData);
	// console.log(stringpeople);

	// $(".json-container").append(stringpeople);

	// let backtojson = JSON.parse(stringpeople);
	// console.log(backtojson);




/*

	2. creating a data set that contains an array of objects

*/






 /*

	3. Stringify the JSON Data and converting it back to JSON format

*/
	





 /*


	4. Understanding for loops and pulling data from a json file.
*/



	$.getJSON( "../data.json", function(data){

		console.log(data.people);

		let myUsers = data.people;

		for(let x  in myUsers){
			$(".json-container").append(myUsers[x].firstName + " "+ myUsers[x].lastName + " " + myUsers[x].age + "<br>" );
		}
		
	})
	