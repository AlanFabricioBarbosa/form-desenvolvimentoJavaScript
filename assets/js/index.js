const form = document.getElementById('form');
const nameInput = document.getElementById('input_name');
const emailInput = document.getElementById('input_email');
const submitBtn = document.getElementById('submitBtn');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
form.addEventListener('submit', submitForm);

function validateName() {
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'O campo Nome não pode ficar em branco.';
        submitBtn.disabled = true;
    } else if (nameInput.value.length > 50) {
        nameError.textContent = 'O campo Nome deve ter no máximo 50 caracteres.';
        submitBtn.disabled = true;
    } else {
        nameError.textContent = '';
        submitBtn.disabled = false;
    }
}

function validateEmail() {
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'O campo Email não pode ficar em branco.';
        submitBtn.disabled = true;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um endereço de email válido.';
        submitBtn.disabled = true;
    } else {
        emailError.textContent = '';
        submitBtn.disabled = false;
    }
}

function submitForm(event) {
    event.preventDefault();
    if (!submitBtn.disabled) {
        form.submit();
    }
}