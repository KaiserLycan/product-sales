


function displayMenu() {
    let menu = document.getElementsByClassName("dropdown-menu")[0];
    if(menu.classList.contains("display-menu")) {
        menu.classList.remove("display-menu")
    }
    else {
        menu.classList.add("display-menu")
    }
}