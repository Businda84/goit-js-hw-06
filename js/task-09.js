
const bodyColorEl = document.querySelector('body');
console.log(bodyColorEl);
const colorChange =document.querySelector('.change-color')
console.log(colorChange);

colorChange.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {return bodyColorEl.style.backgroundColor= `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}` 
   ;
}

