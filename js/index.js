const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = [
    "bg1.jpg", 
    "bg2.jpg", 
    "bg3.jpg", 
    "bg4.jpg", 
    "bg5.jpg", 
    "bg6.jpg",
];
const headings = [
      "New York, USA",
      "Canada, Toronto",
      "New York, USA",
      "Goldon Gate Bridge, USA",
      "New York, USA",
      "New York, USA",    
];
let id = 0;
function slide(id){
    slider.style.backgroundImage = `url(../src/${images [id]})`;
    slider.classList.add("image-fade");
    setTimeout(() =>{
        slider.classList.remove("image-fade");
    } , 5000); 
    heading.innerText = headings[id];
}
arrLeft.addEventListener("click" , () =>{
     id--;
     if( id < 0){
        id = images.length - 1;
     }
     slide(id)
});

arrRight.addEventListener("click" , () =>{
    id++;
    if( id > images.length - 1){
        id = 0 ; 
    }
    slide(id)
});

