const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".ham");

hamburger.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
        menu.classList.add("hide")
        hamburger.src = "./assets/1814109_hamburger_menu_icon.png"
        
    } else {
        menu.classList.add("show")
        menu.classList.remove("hide")
        hamburger.src = "./assets/close_icon.png"
    }
})



window.onresize = () => {
    onDeviceSizeChangeAction()
}


function onDeviceSizeChangeAction() {
    if (window.innerWidth <= 768) {
        menu.classList.add("hide")
        // hamburger.src = "./assets/1814109_hamburger_menu_icon.png"
    }
    
    if (window.innerWidth > 768) {
        menu.classList.add("show")
        // hamburger.src = "./assets/close_icon.png"
    }

}

onDeviceSizeChangeAction()