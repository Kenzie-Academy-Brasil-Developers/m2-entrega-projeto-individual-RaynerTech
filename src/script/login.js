import requestHome from "./request.js"
class Login{
    static showLogin(){
        const btnLogin = document.querySelector("[data-login='loginBtn']")
        const divLogin = document.querySelector("[data-hide='loginHide']")
        const divCadastro = document.getElementById("divCadastroHide")

        btnLogin.addEventListener("click", (event) =>{
            event.preventDefault()
            if(divLogin.id == "divLoginHide"){
                divCadastro.id = "divCadastroHide"
                divLogin.id = "divLoginShow"
            }else{
                divLogin.style.display = "flex"
                divLogin.id = "divLoginHide"
            }
        })
    }
    static loginInputs(){
        const inputEmail = document.querySelector("[data-email='emilLogin']")
        const inputSenha = document.querySelector("[data-email='passLogin']")
        const btnLogin   = document.querySelector("[data-email='btnLogin']")

       
        btnLogin.addEventListener("click", (event) =>{
            const body = {
                email: inputEmail.value,
                password: inputSenha.value,
              }
            requestHome.login(body)
        })
    }
}

export default Login