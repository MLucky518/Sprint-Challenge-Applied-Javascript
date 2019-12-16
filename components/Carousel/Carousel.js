/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(createCarousel());

function createCarousel(){
const carousel = document.createElement("div");
const leftButton = document.createElement("div");
const rightButton = document.createElement("div");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");
const mainImg = document.createElement("img");

carousel.appendChild(leftButton);
carousel.appendChild(rightButton);
carousel.appendChild(mainImg);
// carousel.appendChild(img1);
// carousel.appendChild(img2);
// carousel.appendChild(img3);
// carousel.appendChild(img4);



carousel.classList.add("carousel");
rightButton.classList.add("right-button");
leftButton.classList.add("left-button");


img1.src="./assets/carousel/mountains.jpeg";
img2.src="./assets/carousel/computer.jpeg";
img3.src="./assets/carousel/trees.jpeg";
img4.src="./assets/carousel/turntable.jpeg";

const imgArr = [img1,img2,img3,img4];
let currentImg = 1;

rightButton.addEventListener("click",()=>{

  switch(currentImg){
    case 1: mainImg.src = img1.src;
    mainImg.style.display = "block";
    currentImg++;
    break;

    case 2: mainImg.src = img2.src;
    currentImg++;
    break;

    case 3: mainImg.src = img3.src;
    currentImg++;
    break;

    case 4: mainImg.src = img4.src;
    currentImg = 1;
    break;
  };
});

leftButton.addEventListener("click",()=>{

  switch(currentImg){
    case 1: mainImg.src = img1.src;
    mainImg.style.display = "block";
    currentImg = 4;
    break;

    case 2: mainImg.src = img2.src;
    currentImg--;
    break;

    case 3: mainImg.src = img3.src;
    currentImg--;
    break;

    case 4: mainImg.src = img4.src;
    currentImg --;
    break;
  };
});



leftButton.textContent = "<";
rightButton.textContent = ">";

return carousel;

}
