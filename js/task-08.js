const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    // console.dir(evt.currentTarget);

    const { email, password } = evt.currentTarget.elements;

    const data = {
        email: email.value,
        password: password.value,
    };

console.log(data);
}