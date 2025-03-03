var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const titles = document.querySelectorAll(".title");
let index = 0;

function changeTitle() {
    titles[index].classList.remove("active"); // Remove active class from current title
    index = (index + 1) % titles.length; // Move to next title
    titles[index].classList.add("active"); // Add active class to new title
}

setInterval(changeTitle, 3000); // Change title every 3 seconds



// Menu Toggle Functions
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Form Submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwO9TloREpwgHfxFr_stpo23VXGadLFjMlo3HCMV3NF-kZiBVsBTULVDthmeQAttyLTCw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.createElement('msg');
msg.style.color = 'green';

form.appendChild(msg);

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => msg.innerHTML = "", 3000);
            form.reset();
        })
        .catch(error => {
            msg.style.color = 'red';
            msg.innerHTML = "Something went wrong!";
        });
});
let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");
let currentIndex = 0; // Keep track of the active tab
let autoScrollInterval; // Store the interval ID

function opentab(tabname, element) {
    // Remove the active class from all tabs and buttons
    tabLinks.forEach(link => link.classList.remove("active-link"));
    tabContents.forEach(content => content.classList.remove("active-tab"));

    // Add the active class to the clicked button and corresponding content
    document.getElementById(tabname).classList.add("active-tab");
    element.classList.add("active-link");

    // Reset auto-scroll whenever user manually clicks
    resetAutoScroll();
}

// Function to cycle through tabs automatically
function autoScrollTabs() {
    tabLinks[currentIndex].classList.remove("active-link");
    tabContents[currentIndex].classList.remove("active-tab");

    // Move to the next tab, looping back if necessary
    currentIndex = (currentIndex + 1) % tabLinks.length;

    tabLinks[currentIndex].classList.add("active-link");
    tabContents[currentIndex].classList.add("active-tab");
}

// Reset and restart auto-scroll
function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScrollTabs, 3000); // Change tab every 3 seconds
}

// Start auto-scroll when the page loads
document.addEventListener("DOMContentLoaded", () => {
    resetAutoScroll();
});



document.addEventListener("DOMContentLoaded", function () {
    // Ensure ScrollReveal is loaded
    if (typeof ScrollReveal === "undefined") {
        console.error("ScrollReveal is not loaded.");
        return;
    }

    // Create a new ScrollReveal instance
    const sr = ScrollReveal({
        distance: "50px",
        duration: 2000,
        easing: "cubic-bezier(0.5, 1, 1, 1)", // Fixed easing
        reset: true,
    });

    // Function to reveal elements
    function revealElements() {
        sr.reveal("#header", { origin: "top", delay: 200 });
    //   sr.reveal(".header-text h1", { origin: "left", delay: 300 });
       sr. reveal(".lovely", { origin: "right", delay: 50 });
        sr.reveal(".sub-title", { origin: "top", delay: 300 });
        sr.reveal(".about-col-2", { origin: "bottom", delay: 600 });
        sr.reveal(".about-col-1", { origin: "left", delay: 500 });

    }

    // Call the function
    revealElements();
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".header-text"); // Select both elements

    function checkVisibility() {
        elements.forEach(element => {
            var position = element.getBoundingClientRect();

            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Run on page load
    checkVisibility();

    // Run when user scrolls
    window.addEventListener("scroll", checkVisibility);
});
document.addEventListener("DOMContentLoaded", function () {
    const works = document.querySelectorAll(".work");
    let index = 0;

    function showNextLayer() {
        works.forEach(work => work.classList.remove("active")); // Remove previous active class

        works[index].classList.add("active"); // Add active class to current work

        index = (index + 1) % works.length; // Move to the next work item
    }

    setInterval(showNextLayer, 3000); // Change every 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".door-overlay").classList.add("open");

        // Remove the doors from the DOM after animation
        setTimeout(() => {
            document.querySelector(".door-overlay").remove();
        }, 2000);
    }, 1000); // Delay before the doors open
});


