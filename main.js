const warning = document.querySelector('.warning');
const password = document.querySelector('.pass');
const confirmPassword = document.querySelector('.cpass');

confirmPassword.addEventListener('input', () => {
    confirmPassword.setAttribute('pattern', password.value);
    confirmPassword.reportValidity();
    if (password.value !== confirmPassword.value) {
        warning.style.opacity = 1;
    }
    else {
        warning.style.opacity = 0;
    }
})