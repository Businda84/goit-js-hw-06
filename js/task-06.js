const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener('blur', onInput)

function onInput(evt) {


  console.log(String(evt.currentTarget.value.length));
  console.log(inputEl.dataset.length);
  

  if (evt.currentTarget.value.length === inputEl.dataset.length) {
    console.log(evt.currentTarget.value.length);
    console.log(inputEl.dataset.length);
     inputEl.classList.add("valid")
     console.dir(evt.currentTarget.value.length);
  
   }
   else
    inputEl.classList.add("invalid")
   alert('Невірна кількість символів');
}

 