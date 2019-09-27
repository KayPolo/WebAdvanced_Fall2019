window.addEventListener('DOMContentLoaded', function () {
	loadData();
});


function loadData() {
	$.getJSON("../data.json", function (data) {


		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}

		generateWebsites(data);

	});
}


function generateWebsites(data) {


	let source = $("#websites-template").html();
	let template = Handlebars.compile(source);
	let result = template(data);
	let list = $('.websites-list');
	list.append(result);

}


