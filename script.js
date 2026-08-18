//==============================
// HERO IMAGE SLIDER
//==============================

let slideIndex = 0;

const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

let timer;



function showSlides(){

    if(slides.length === 0){
        return;
    }


    slides.forEach(slide=>{
        slide.style.display = "none";
    });


    dots.forEach(dot=>{
        dot.classList.remove("active");
    });



    slides[slideIndex].style.display = "block";


    if(dots.length > 0){

        dots[slideIndex].classList.add("active");

    }


    slideIndex++;


    if(slideIndex >= slides.length){

        slideIndex = 0;

    }


    timer = setTimeout(showSlides,5000);

}



showSlides();




//==============================
// NEXT & PREVIOUS BUTTONS
//==============================


function plusSlides(n){


    clearTimeout(timer);


    slideIndex += n;


    if(slideIndex >= slides.length){

        slideIndex = 0;

    }


    if(slideIndex < 0){

        slideIndex = slides.length - 1;

    }



    slides.forEach(slide=>{

        slide.style.display="none";

    });



    dots.forEach(dot=>{

        dot.classList.remove("active");

    });



    slides[slideIndex].style.display="block";


    if(dots.length > 0){

        dots[slideIndex].classList.add("active");

    }


    timer = setTimeout(showSlides,5000);


}




//==============================
// DOT CLICK FUNCTION
//==============================


dots.forEach((dot,index)=>{


    dot.addEventListener("click",()=>{


        clearTimeout(timer);


        slideIndex = index;



        slides.forEach(slide=>{

            slide.style.display="none";

        });



        dots.forEach(dot=>{

            dot.classList.remove("active");

        });



        slides[index].style.display="block";


        dot.classList.add("active");



        timer = setTimeout(showSlides,5000);


    });


});




//==============================
// SCROLL REVEAL ANIMATION
//==============================


const animatedCards = document.querySelectorAll(
".service-card, .why-card, .destination-card, .testimonial-card, .box"
);



animatedCards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition="0.8s ease";

});




function revealCards(){


    animatedCards.forEach(card=>{


        let position = card.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;



        if(position < screenHeight - 100){


            card.style.opacity="1";

            card.style.transform="translateY(0)";


        }


    });


}



window.addEventListener("scroll",revealCards);


revealCards();
//==============================
// DESTINATION SEARCH
//==============================

const searchInput = document.querySelector(".search-box input");
const destinationCards = document.querySelectorAll(".destination-card");


if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let value = searchInput.value.toLowerCase();


        destinationCards.forEach(card => {


            let name = card.querySelector("h3").innerText.toLowerCase();


            if(name.includes(value)){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }


        });


    });

}





//==============================
// SCROLL ANIMATION
//==============================


const cards = document.querySelectorAll(
".destination-card, .why-card"
);



function showCards(){


cards.forEach(card=>{


let position = card.getBoundingClientRect().top;


let screenHeight = window.innerHeight;



if(position < screenHeight - 100){


card.style.opacity="1";

card.style.transform="translateY(0)";


}


});


}



cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.8s";


});



window.addEventListener("scroll",showCards);


showCards();
//==============================
// PACKAGE CARD SCROLL ANIMATION
//==============================

const packageCards = document.querySelectorAll(".package-card");


if(packageCards.length > 0){

    packageCards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.8s";

    });


    function revealPackages(){

        packageCards.forEach(card => {

            let position = card.getBoundingClientRect().top;

            let screenHeight = window.innerHeight;


            if(position < screenHeight - 100){

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

            }

        });

    }


    window.addEventListener("scroll", revealPackages);

    revealPackages();

}



//==============================
// PACKAGE BUTTON CLICK
//==============================

const packageButtons = document.querySelectorAll(".package-btn");


if(packageButtons.length > 0){

    packageButtons.forEach(button => {

        button.addEventListener("click", function(){

            alert("Thank you for choosing Vaishnavi Travel & Tourism!");

        });

    });

}
//==============================
// GALLERY IMAGE ANIMATION
//==============================

const galleryCards = document.querySelectorAll(".gallery-card");


if(galleryCards.length > 0){


    galleryCards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.8s";

    });



    function revealGallery(){


        galleryCards.forEach(card => {


            let position = card.getBoundingClientRect().top;

            let screenHeight = window.innerHeight;



            if(position < screenHeight - 100){


                card.style.opacity = "1";

                card.style.transform = "translateY(0)";


            }


        });


    }



    window.addEventListener("scroll", revealGallery);

    revealGallery();


}
//==============================
// CONTACT FORM MESSAGE
//==============================

const contactForm = document.querySelector(".contact-form form");


if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for contacting Vaishnavi Travel & Tourism. We will get back to you soon!");

        contactForm.reset();

    });

}