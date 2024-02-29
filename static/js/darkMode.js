const themeBtn = document.querySelector(".theme-btn");
let darkMode = localStorage.getItem("darkMode");

const themeIcon = document.querySelector(".theme-icon");
let icon = localStorage.getItem("icon");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

    localStorage.setItem("icon", "enabled");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    
    localStorage.setItem("icon", "disabled");
    localStorage.setItem("darkMode", "disabled");
}

if(darkMode === "enabled" && icon === "enabled") {
    enableDarkMode();
}

themeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    icon = localStorage.getItem("icon");
    
    if(darkMode !== "enabled" && icon !== "enabled") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})