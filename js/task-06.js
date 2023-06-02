const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener('blur', onInput)

function onInput(evt) {


  console.log(String(evt.currentTarget.value.length));
  console.log(inputEl.dataset.length);
  

  if (String(evt.currentTarget.value.length).trim() === inputEl.dataset.length) {
    console.log(evt.currentTarget.value.length);
    console.log(inputEl.dataset.length);
    this.classList.remove('valid');
    this.classList.add('invalid')
    
  
   }
   else
    this.classList.remove('valid');
    this.classList.add('invalid');
   alert('Невірна кількість символів');
}

 