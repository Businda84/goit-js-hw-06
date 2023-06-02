const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener('blur', (evt) => {
  if (Number(evt.currentTarget.value.trim().length) === Number(inputEl.dataset.length)) {

    console.log(Number(evt.currentTarget.value.trim().length));
   
    
    inputEl.classList.remove('invalid');

    return inputEl.classList.add('valid');

   }
   inputEl.classList.add('invalid');
})

// function onInput(evt) {


//   if (Number(evt.currentTarget.value.length) === Number(inputEl.dataset.length)) {

//     console.log(Number(evt.currentTarget.value.length));
//     console.log(Number(inputEl.dataset.length)===Number(evt.currentTarget.value.length));
    
//     inputEl.classList.remove('invalid')

//       return inputEl.classList.add('valid')

//    }
//    inputEl.classList.add('invalid');

// }
