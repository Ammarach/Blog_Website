const navMenu = document.getElementById("menu_bar");
const menu = document.getElementById("nav_menu");
navMenu?.addEventListener("click", () => {
    if(menu?.className == "nav_hidden"){
        menu.classList.remove("nav_hidden");
    }
    else{
        menu.classList.add("nav_hidden");
    }
});