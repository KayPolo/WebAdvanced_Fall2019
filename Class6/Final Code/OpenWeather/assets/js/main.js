window.addEventListener('DOMContentLoaded', function () {
	loadData();
	// attachEvents();

});

//  //let city = "New York";

function loadData() {
	//	$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3e81db9ecd637f0a3034a1ff3e78d519", 
	$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=3e81db9ecd637f0a3034a1ff3e78d519", 
	function (data) {
		console.log(data);

		let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
		let temp = data.main.temp;
		let weather = data.weather[0].main;

		$(".icon").attr("src",icon);
		$(".temp").append(Math.round(temp / 4.09) + " "+"°F");
		$(".weather").append(weather);


		console.log(icon);
		console.log(temp);

	});

}



// var attachEvents = function () {
// 	$('#search-button').off('click').on('click', function () {
// 		loadData($('#city').val());
// 	});

// 	$('#city').keypress(function (e) {
// 		if (e.keyCode == 13) {
// 			loadData($('#city').val());
// 		}
// 	});
// };



// function loadData() {

// 	var city = $("#city").val();


// 	if (city != '') {

// 		$.ajax({

// 			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3e81db9ecd637f0a3034a1ff3e78d519",
// 			type: "GET",
// 			dataType: "jsonp",
// 			success: function (data) {
// 				console.log(data);
// 				console.log(data.weather[0].main);
// 				console.log(data.main);
// 				console.log(data.main.temp);

// 			//What happen if you search for a second term?
// 			// You need to clean the fields befor putting the new information	
// 				$(".icon").empty();
// 				$(".temp").empty();
// 				$(".temp").empty();

// 				let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
// 				let temp = data.main.temp;
// 				let weather = data.weather[0].main;

			
// 				$(".icon").attr("src", icon);
// 				$(".icon").css("width", "100px");
// 				$(".weather").append(Math.floor(temp / 4.09) + " " + "°F");
// 				$(".temp").append(weather);

				


// 			}
// 		});
// 	} else {
// 		$('#error').html('Field cannot be empty');
// 	}
// };
