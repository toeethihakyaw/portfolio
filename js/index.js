"use strict";
let menuCheckBox = document.querySelector("#menu");
let home = document.querySelector("#homeBtn");
let skills = document.querySelector("#skillsBtn");
let projects = document.querySelector("#projectsBtn");
let contact = document.querySelector("#contactBtn");
let viewHome = document.querySelector("#viewHome");
let viewSkills = document.querySelector("#viewSkills");
let viewProjects = document.querySelector("#viewProjects");
let viewContact = document.querySelector("#viewContact");
home.addEventListener("click", function () {
    scrollToView(viewHome);
});
skills.addEventListener("click", function () {
    scrollToView(viewSkills);
});
projects.addEventListener("click", function () {
    scrollToView(viewProjects);
});
contact.addEventListener("click", function () {
    scrollToView(viewContact);
});
function scrollToView(typeOfView) {
    if (menuCheckBox.checked) {
        setTimeout(function () {
            menuCheckBox.checked = false;
        }, 200);
    }
    setTimeout(function () {
        typeOfView.scrollIntoView();
    }, 400);
}
