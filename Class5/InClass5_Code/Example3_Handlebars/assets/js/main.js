window.addEventListener('DOMContentLoaded', function () {
    loadData();

    console.log("Code is working");
});


function loadData(){
    $.getJSON("../../data.json", function(data){

        console.log(data);
        
        generateWebsites(data);

    });
}

function generateWebsites(data){

    let source = $("#websites-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let list = $(".websites-list");

    list.append(result);

}


