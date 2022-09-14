import login from "./login.js"
import cadastro from "./cadastro.js"
import requestHome from "./request.js"
import renderHome from "./renderHome.js"

cadastro.showCadastro()
cadastro.cadastroInputs()

login.showLogin()
login.loginInputs()

requestHome.empresasParceiras()

renderHome.navMenu()
