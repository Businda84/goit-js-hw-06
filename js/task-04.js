
const counterValueEl = document.querySelector('#value');

const deskBtn = document.querySelector("[data-action='decrement']");
const incrBtn = document.querySelector("[data-action='increment']");
console.dir(counterValueEl);

// counterValueEl.textContent = 0;
deskBtn.addEventListener('click', OnIncrement)

incrBtn.addEventListener('click', OnDecrement)
  const step = 1;

function OnDecrement(params) {
   console.log(step);
     console.log('Клик+')
    counterValueEl.textContent += step;
};

function OnIncrement(params) {
 console.log(params);
     console.log('Клик-')
    counterValueEl.textContent -= step;
};