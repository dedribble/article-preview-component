const button = document.getElementById('mainShare');
const buttonTwo = document.getElementById('innerShare');
const social = document.querySelector('.social')

button.addEventListener('click', () => {
    social.classList.toggle('active');
})

buttonTwo.addEventListener('click', ()=> {
    social.classList.remove('active');
})