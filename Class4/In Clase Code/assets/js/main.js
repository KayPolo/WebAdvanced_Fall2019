window.addEventListener('DOMContentLoaded', function(){

    // let sideNav = $("#mySideNav");

 //Why is one working and the other not   
    let sideNav = document.getElementById("mySideNav");
    addLinks(sideNav);

    scrollAnimation();

// let d = document.getElementById("nav");
// let navOffset = d.offsetTop;

// console.log(navOffset);

let navOffset = $("nav").offset().top;
console.log(navOffset);

$(window).scroll(function(){

    let scrollPos = $(window).scrollTop();
    console.log(scrollPos);


    let stickNav = $("nav");
    stickyMenu(stickNav);

    let stickMenu = $(".menubar");
    stickyMenu(stickMenu);

    
    function stickyMenu(banana){

        if(scrollPos >= navOffset){
            banana.addClass("fixed");
        }
        else{
            banana.removeClass("fixed");
        }

    }


    // stickyMenu();

    // function stickyMenu(){

    //     if(scrollPos >= navOffset){
    //         $(".menubar").addClass("fixed");
    //     }
    //     else{
    //         $(".menubar").removeClass("fixed");
    //     }

    // }

    // stickyNavigation();

    // function stickyNavigation(){

    //     if(scrollPos >= navOffset){
    //         $("nav").addClass("fixed");
    //     }
    //     else{
    //         $("nav").removeClass("fixed");
    //     }

    // }


    let sectionTwo = $("#linkTwo").offset().top;

    if(scrollPos >= sectionTwo - 100){
        $('.t2').addClass('appear');
    }
    else{
        $('.t2').removeClass('appear');
    }



});





});



function openNav(){
    $("#mySideNav").addClass("openMenu");
}

function closeNav(){
    $("#mySideNav").removeClass("openMenu");
}

function addLinks(apples){

    apples.innerHTML += "<a href='#home'>HOME</a> ";
    apples.innerHTML += "<a href='#linkOne'>LINK 1</a> ";
    apples.innerHTML += "<a href='#linkTwo'>LINK 2</a> ";
    apples.innerHTML += "<a href='#linkThree'>LINK 3</a> ";


}

function scrollAnimation(){
    $('a').click(function(){

        let myTarget = $(this.hash);
        myTarget = myTarget.length && myTarget;

        let targetOffset = myTarget.offset().top;
        $('html,body').animate({scrollTop:targetOffset},1000);

    });
}


