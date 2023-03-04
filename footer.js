
var changeLanguageBox = document.getElementById("language_select");
var languageList = document.getElementById("language_list");
var windowPane = document.getElementById("window_pane");
console.log(languageList);

function openLanguageSelection(){
    console.log("open");
    languageList.style.display = "flex";
    windowPane.style.display = "block";
}

function closeLanguageSelection(){
    console.log("closed");
    languageList.style.display = "none";
    windowPane.style.display = "none";
}

windowPane.addEventListener("click", closeLanguageSelection);