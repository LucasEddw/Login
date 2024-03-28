const sign = document.querySelector('#signLink');
const signButton = document.querySelector('#signButton');
const passIconLogin = document.querySelector('.password-icon-login');
const passIconSign = document.querySelector('.password-icon-sign');
const passwordLogin = document.querySelector('.password-login');
const passwordSign = document.querySelector('.password-sign');
const card = document.querySelector('.card');

sign.addEventListener('click', (event)=>{
    event.preventDefault();
    card.classList.toggle('flip');
});

signButton.addEventListener('click', ()=>{
    card.classList.toggle('flip');
})

passIconLogin.addEventListener('click', ()=>{
    passIconLogin.classList.toggle('fa-lock-open')
    if(passwordLogin.type != 'password'){
        passwordLogin.type = 'password';
    }else{
        passwordLogin.type = 'text';
    }
})
passIconSign.addEventListener('click', ()=>{
    passIconSign.classList.toggle('fa-lock-open')
    if(passwordSign.type != 'password'){
        passwordSign.type = 'password';
    }else{
        passwordSign.type = 'text';
    }
})