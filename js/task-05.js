const textInputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', oninputElsubmit)

function oninputElsubmit(event) {
    console.log(event.currentTarget.value);
    outputNameEl.textContent = event.currentTarget.value;
}
