// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault();
//     // console.dir(evt.currentTarget);

//     const { email, password } = evt.currentTarget.elements;
//     if (email.value && password.value) {
//         const data = {
//         email: email.value,
//         password: password.value,
//             return
//        };
//            alert ="Помилка, поле не заповнене"      
//     }
//    formEl.reset()
// }

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    // console.dir(evt.currentTarget);

    const { email, password } = evt.currentTarget.elements;

    if (email.value && password.value) {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
        formEl.reset()
        return
      
    }
alert('Введіть данні')
}
