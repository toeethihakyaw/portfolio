let menuCheckBox = document.querySelector("#menu") as HTMLInputElement;
let home = document.querySelector("#homeBtn") as HTMLDivElement;
let skills = document.querySelector("#skillsBtn") as HTMLDivElement;
let projects = document.querySelector("#projectsBtn") as HTMLDivElement;
let contact = document.querySelector("#contactBtn") as HTMLDivElement;
let viewHome = document.querySelector("#viewHome") as HTMLDivElement;
let viewSkills = document.querySelector("#viewSkills") as HTMLDivElement;
let viewProjects = document.querySelector("#viewProjects") as HTMLDivElement;
let viewContact = document.querySelector("#viewContact") as HTMLDivElement;
home.addEventListener("click", function(){
    scrollToView(viewHome);
});
skills.addEventListener("click", function(){
    scrollToView(viewSkills);
});
projects.addEventListener("click", function(){
    scrollToView(viewProjects);
});
contact.addEventListener("click", function(){
    scrollToView(viewContact);
});
function scrollToView(typeOfView: HTMLDivElement): void{
    if(menuCheckBox.checked){
        setTimeout(function(){
            menuCheckBox.checked = false;
        }, 200);
        
    }
    setTimeout(function(){
        typeOfView.scrollIntoView();
    }, 400);
}
