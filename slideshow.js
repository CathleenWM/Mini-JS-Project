let slideshow = [
    {"source":"giraffes.jpg", "title":"Giraffes", "author":"Gil from Pixabay"},
    {"source":"impala.jpg", "title":"Impala and bird", "author":"Matrishva vyas from Pixabay"},
    {"source":"zebras.jpg", "title":"Zebras", "author":"Bertsz from Pixabay"},
    {"source":"rhinos.jpg", "title":"Rhinos", "author":"Monika from Pixabay"},
    {"source":"tiger.jpg", "title":"White tiger and girl", "author":"Sarah Richter from Pixabay"}
];

let add1 = {
    "source":"eagle.jpg", "title":"Eagle", "author":"Couleur from Pixabay"
}
slideshow.push(add1);

let image = document.getElementById("image");
let title = document.getElementById("title");
let author = document.getElementById("author");

let i=0;

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

imageInformation();

setInterval(imageInformation, 5000);

