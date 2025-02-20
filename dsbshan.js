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
