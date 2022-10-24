const email = document.getElementById('email')
const notify = document.querySelector('.button')
const error = document.querySelector('#err')
const border = document.querySelector('.input')



function validateEmail() {
    if (email.value.includes('@')) {
        email.style.border = 'grey';
        error.style.color = 'blue';
        error.innerHTML = 'Email is correct';
    } else {
        email.style.border = "1px solid red";
        error.style.color = 'red'
        error.innerHTML = 'Please provide a valid email address';
    }
}



notify.addEventListener('click', validateEmail);