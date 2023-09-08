const headerMenu = document.querySelector("header .navigation");
headerMenu.classList.add("hidden");
headerMenu.classList.add("op-0");

document.querySelector("header .menu").addEventListener("click", function () {
    fade(headerMenu, "op-0", 500, "hidden");
});

const pLinks = document.querySelector(".p-link");
pLinks.classList.add("hidden")
pLinks.classList.add("op-0");

document.querySelector("aside .links").addEventListener("click", function () {
    fade(pLinks, "op-0", 500, "hidden");
});


// element must be selected and passed to the function
// className must be a string
// duration is in milliseconds
// hideClass is optional
function fade (element, className, duration, hideClass) {
    if (hideClass) {
        toggleHide(element, hideClass, duration);
    }
    if (element.classList.contains(className)) {
        element.style.opacity = '0';
        for (let i=0; i<=100; i++) {
            setTimeout(function () {
                element.style.opacity = `${i/100}`;
            }, duration*i/100);
        }
    }
    else {
        element.style.opacity = '1';
        for (let i = 100; i>=0; i--) {
            setTimeout(function() {
                element.style.opacity = `${i/100}`;
            }, duration*(1 - (i-1)/100));
        }
    }
    element.classList.toggle(className);
}

function toggleHide (element, className, duration) {
    if (element.classList.contains(className)) {
        duration = 0;
    }
    setTimeout(() => {
        element.classList.toggle(className);
    }, duration);
}


const backToTop = document.querySelector("footer .to-top");

backToTop.addEventListener("click", function () {
    document.querySelector("header").scrollIntoView({behavior: "smooth"});
});


// Testimonials Slider
const leftSlider = document.querySelector(".client .arr-l");
const rightSlider = document.querySelector(".client .arr-r");

if (leftSlider) {

    const testimonialWriter = document.querySelectorAll(".client .writer");
    testimonialWriter.forEach((element) => {
        element.classList.add("op-0");
        element.classList.add("hidden");
    });
    testimonialWriter[0].classList.remove("op-0");
    testimonialWriter[0].classList.remove("hidden");
    let i = 0;
    
    rightSlider.addEventListener("click", function () {
        fade(testimonialWriter[i], "op-0", 0);
        toggleHide(testimonialWriter[i], "hidden", 0)
        if ( i == testimonialWriter.length - 1 ) {
            i = -1;   
        }
        fade(testimonialWriter[i+1], "op-0", 500);
        toggleHide(testimonialWriter[i+1], "hidden", 500);
        i++;
    });
    
    leftSlider.addEventListener("click", function () {
        fade(testimonialWriter[i], "op-0", 0);
        toggleHide(testimonialWriter[i], "hidden", 0)
        if ( i == 0 ) {
            i = testimonialWriter.length;   
        }
        fade(testimonialWriter[i-1], "op-0", 500);
        toggleHide(testimonialWriter[i-1], "hidden", 500);
        i--;
    });
}


// Facts Slider
const facts = document.querySelector(".facts .arr-r")

if (facts) {
    const info = document.querySelectorAll(".info p");
    info.forEach((element) => {
        element.classList.add("op-0");
        element.classList.add("hidden");
    });
    info[0].classList.remove("op-0");
    info[0].classList.remove("hidden");

    let i = 0;

    facts.addEventListener("click", function () {
        fade(info[i], "op-0", 0);
        toggleHide(info[i], "hidden", 0)
        if ( i == info.length - 1 ) {
            i = -1;   
        }
        fade(info[i+1], "op-0", 500);
        toggleHide(info[i+1], "hidden", 500);
        i++;
    });
}