const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')
const formContainer = document.querySelector('#formContainer')

formContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(inputUser.value)
    console.log(inputPass.value)

    if (inputUser.value === validUser && inputPass.value === validPass) {
        document.getElementById('resultado').innerText = "Login efetuado com sucesso, boas vindas Giih!";
       
    } else if (inputUser.value === '' || inputPass.value === '') {
        document.getElementById('resultado').innerText = "Por favor, insira seu usuário e senha.";
       
    } else {
        document.getElementById('resultado').innerText = "Usuário ou senha incorretos!";

    }

    inputUser.value = ''
    inputPass.value = ''
})

const validUser = 'Giih';
const validPass = 'gato123';


