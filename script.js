const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

const length = images.length;
let slideNumber = 1;


//** bottom ==============================================================*/
for(let i=0; i<length; i++){
    const div = document.createElement("div");
    div.className = 'button';
    bottom.appendChild(div);
};
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = 'whitesmoke';


//** clicking each button */
const resetBg = () =>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = 'transparent';
        button.addEventListener("mouseover", stopSlideShow);
        button.addEventListener("mouseout", startSlideShow);
    })
}

buttons.forEach((button, i)=>{
    button.addEventListener("click", ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*60}rem)`;
        slideNumber = i+1;
        button.style.backgroundColor = 'white';
    })
})

// chnage dots background color on arrow click
const changeColor = () =>{
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = 'white';
};



//? right ======================================================================
const nextSlide = () =>{
        slider.style.transform = `translateX(-${slideNumber * 60}rem)`;
        slideNumber++;
}

const getFirstSlide = () =>{
    slider.style.transform = `translateX(0rem)`;
    slideNumber = 1; 
}

right.addEventListener("click", ()=>{
    (slideNumber < length) ? nextSlide(): getFirstSlide();
    changeColor();
});




//? left ========================================================================
const prevSlide = () =>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 60}rem)`;
    slideNumber--;
}

const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length-1)*60}rem)`;
    slideNumber = 1; 
}

left.addEventListener("click", ()=>{
    (slideNumber > 1) ? prevSlide(): getLastSlide();
    changeColor();
});



//? Auto-Slider ==========================================================
let slideInterval;

const startSlideShow = () =>{
    slideInterval = setInterval(()=>{
        (slideNumber < length) ? nextSlide(): getFirstSlide();
        changeColor();
    },2000);
}

//** stop slide on mouse Hover
const stopSlideShow = () =>{
    clearInterval(slideInterval);
}



window.addEventListener("DOMContentLoaded", startSlideShow);
slider.addEventListener("mouseover", stopSlideShow);
slider.addEventListener("mouseout", startSlideShow);
right.addEventListener("mouseover", stopSlideShow);
right.addEventListener("mouseout", startSlideShow);
left.addEventListener("mouseover", stopSlideShow);
left.addEventListener("mouseout", startSlideShow);