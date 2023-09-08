const pLinks = document.querySelector(".p-link");
pLinks.classList.add("hidden")
pLinks.classList.add("op-0");

document.querySelector("aside .links").addEventListener("click", function () {
    fade(pLinks, "op-0", 500, "hidden");
});


// element must be selected and passed to the function
// className must be a string
// duration is in milliseconds
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