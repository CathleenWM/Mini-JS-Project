const slideshow = [
    {"source":"images/giraffes.jpg", "title":"Giraffes", "author":"Gil from Pixabay"},
    {"source":"images/impala.jpg", "title":"Impala and bird", "author":"Matrishva vyas from Pixabay"},
    {"source":"images/zebras.jpg", "title":"Zebras", "author":"Bertsz from Pixabay"},
    {"source":"images/rhinos.jpg", "title":"Rhinos", "author":"Monika from Pixabay"},
    {"source":"images/tiger.jpg", "title":"White tiger and girl", "author":"Sarah Richter from Pixabay"}
];

// arrays bør altid være const, da de bagud opdaterer, man kan stadig add til dem
console.log(slideshow);

const add1 = {
    "source":"images/eagle.jpg", "title":"Eagle", "author":"Couleur from Pixabay"
}

slideshow.push(add1);

console.log(slideshow);

let image = document.getElementById("image");
let title = document.getElementById("title");
let author = document.getElementById("author");

let i=0;

window.addEventListener("DOMContentLoaded",load)

function load(){
    console.log("function is running");
    imageInformation();
}

function imageInformation(){
    image.src = slideshow[i].source.toString();
    title.innerHTML = slideshow[i].title.toString();
    author.innerHTML = slideshow[i].author.toString();
    
    if (i>=slideshow.length - 1) {
        i=0;
    } else {
        i++;
    }
}

setInterval(imageInformation, 5000);

