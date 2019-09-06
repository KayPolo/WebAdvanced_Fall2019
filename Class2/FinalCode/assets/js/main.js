
// /*
//     Understanding var vs let
//     let and const didn't existed before ES6(ES2015)

//     let and const => block-scoped
//     var => function-scoped
// */

//     function start(){
//         for(let i = 0 ; i < 5; i++){
//         console.log(i);
//     }

//     /* the second console.log throughs error 
//     because let only can be used locally*/

//     // console.log(i);

//     /* When we change let to var it won't 
//     througt error because var allows to access the 
//     variable from outside the block*/

// }
// start(); 


//     /* Let's see another example:*/
//     function newStart(){
//         for(let i = 0 ; i < 5; i++){
//             if(true){
//                 var color = "yellow";
//             }
//         }
//     /* When I declare color, if I use var, the 
//     value is accessible as long as I'm inside the function
//     But if I use let, the value will be onl;y accessible 
//     inside the block*/
//         console.log(color);
//     }

//     newStart();



    


/*
 * Original Code by Lucien Huang! 
 */

// This is the array of the images

var images = [
    "newschoolbuilding.jpg",
    "050615_Festival_052_750x563.jpg",
    "745127-original.jpg",
    "1496605813404.jpeg",
    "bigimg_parsons.png",
    "D10_01.jpg",
    "DnKbS0IX4AEBA5-.jpg",
    "exterior-PortalImages.jpg",
    "newschoolbuilding.jpg",
    "Parsons_about_5607thave.jpg",
    "Parsons-about.jpg",
    "SP16_SummerIntensive_Nector_Parsons.jpg",
    "The-New-School-Student-Life-3.jpg",
    "The-New-School’s-Parsons-School-of-Design-3.jpg",
    "tish.jpg"];


//3. I need to set the initial value of the images that are going to open
let imgSwitch = 0;    


document.addEventListener("DOMContentLoaded", function(){

    console.log("JS connected");

    loadImages();

});



//here I'm going to load my function

function loadImages() {

   let imageNumber = 0; 

//1. Get the columns from the DOM
   let columns = document.getElementsByClassName("column");

//    console.log(columns.length);


//2. Load the images
   for(let i = 0; i< images.length; i++){


    // In this case we're creating the image tag with and ID and class

        let newImg = document.createElement("img");
        newImg.className = "images";
        newImg.id = i; 
        newImg.src = "./assets/images/"+images[i];


    //Now we need to add the images to the DOM    
        columns[imageNumber].appendChild(newImg);

        imageNumber++; 
    
    /*The array of images is bigger than the array of columns,
    so when we get to the end the next image should start to count 
    from zero
    */
        if(imageNumber > columns.length-1){
            imageNumber = 0; 
        }


    /*5. When I click each image, I want to trigger the function popUp
     and assign a value to the image that correspond with the image
    that I'm clicking */

        newImg.addEventListener("click", function(tempvalue){

            popUp(tempvalue.target.id);
            imgSwitch = tempvalue.target.id; 

        });


        
        
   }
}

/*4. I want to declare my function popUp that is 
going to be triggered when I click each image */

function popUp (imgCount){

    imgSwitch = imgCount;

    var popup = document.getElementById("popup");

    var img = document.getElementById("pic");

    popup.style.zIndex = "1";
    popup.style.display = "block";

// Now that we created the images, we can use it as a trigger to close itself
    img.addEventListener("click", function(){
        close();
    });


    img.src = "./assets/images/"+images[imgCount];

}    



function close(){

    let popup = document.getElementById("popup");
    popup.style.zIndex = "-1";
    popup.style.display = "none";

}




function change(direction){
    var numOfImg = images.length;

    var next = 0;

    var img = document.getElementById("pic");



    if( direction == 1){

        if(imgSwitch > numOfImg-2){
            next = 0; 
        } else {

            imgSwitch++;
            next = imgSwitch;
        }

    }else if( direction == -1){

        if(imgSwitch-1 < 0){
            next = numOfImg - 1; 
        }else{
            next = imgSwitch - 1; 
        }

    }

    img.src = "./assets/images/"+images[next];
    imgSwitch = next;
}









