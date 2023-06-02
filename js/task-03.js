const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery')



const makeImg = images.map(
  (image)=>`<li class="img__items"><img src="${image.url}" alt="${image.alt}" width="640" height="640"></li>`
)
  
listEl.insertAdjacentHTML('afterbegin', makeImg);

// listEl.requestPointerLock.add=   width= 100px,
//   height= 100px,
//   border-radius= 20%,
//   background-color= #2196f3


