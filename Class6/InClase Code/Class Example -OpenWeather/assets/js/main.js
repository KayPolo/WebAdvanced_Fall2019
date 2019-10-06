window.addEventListener('DOMContentLoaded', function () {

    // loadData();

    attachEvent();

});



function attachEvent(){

    $("#search-button").off("click").on("click", function(){
        loadData($("#city").val());
    });
    $("#city").keypress(function(e){
        if(e.keyCode ==13){
            loadData($("#city").val());
        }

    });


}


function loadData() {

    let city = $("#city").val();

    // $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=388df386e14f9c9410f7acee2c53ec0b",
    //  function(data){

    //     console.log(data);
    //     // console.log(data.name);

    //     // $(".weather").append(data.name);

    //     let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    //     let temp = data.main.temp;
    //     let weather = data.weather[0].description;

    //     $(".icon").attr("src", icon);
    //     $(".weather").append(Math.floor((temp - 273.15) * 9/5 + 32) + " " + "°F");
    //     $(".temp").append(weather);


    //     console.log(temp);



    // });


    if (city != '') {
        $.ajax({

            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=388df386e14f9c9410f7acee2c53ec0b",
            type: "GET",
            dataType: "json",
            success: function (data) {

                console.log(data);

                $(".icon").empty();
                $(".weather").empty();
                $(".temp").empty();
                $("#error").empty();

              

                let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                let temp = data.main.temp;
                let weather = data.weather[0].description;


                $(".icon").attr("src", icon);
                $(".weather").append(Math.floor((temp - 273.15) * 9 / 5 + 32) + " " + "°F");
                $(".temp").append(weather);

            }

        });

    } else {
        $("#error").html("City can't be empty");
    }
}