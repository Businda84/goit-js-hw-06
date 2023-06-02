
const counterValueEl = document.querySelector('#value');

const deskBtn = document.querySelector("[data-action='decrement']");
const incrBtn = document.querySelector("[data-action='increment']");
console.dir(counterValueEl);

counterValueEl.textContent = 0;
deskBtn.addEventListener('click', OnIncrement)

incrBtn.addEventListener('click', OnDecrement)


function OnDecrement(params) {
     console.log('Клик+')
    counterValueEl.textContent += 1;
};

function OnIncrement(params) {
     console.log('Клик-')
    counterValueEl.textContent -= 1;
};