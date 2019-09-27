/*------------------------------------------------*/
// 	Handlebars Intro
//	http://handlebarsjs.com/
//	Learn more: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
/*------------------------------------------------*/

//	Our Data Object


var data = {
	title: "My First Post",
	description: "Why is this so easy?!"
}

// var data = [{
// 	"title": "My First Post",
// 	"description": "Why is this so easy?!",
// 	"info":{
// 		"first": "tell me more about it",
// 		"second":"tell me again"
// 	}
// },{
// 	"title": "My Second Post",
// 	"description": "Why is this so easy?!",
// 	"info":{
// 		"first": "Then tell me more about it",
// 		"second":"tell me again"
// 	}
// },{
// 	"title": "My Third Post",
// 	"description": "Why is this so easy?!",
// 	"info":{
// 		"first": "Now tell me more about it",
// 		"second":"tell me again"
// 	}
// }
// ]



// for(let i = 0; i < data.length; i++ ){
// 	console.log(data[i].info.first);

// 	// console.log(data);


// }


var source = $('#myfirst-template').html();

var templete = Handlebars.compile(source); 

var results = templete(data);

$('body').append(results);

