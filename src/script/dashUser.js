import renderUser from "./dashboardUserRender.js"
import menu       from "./dashAdmin.js"
import requestUser from "./dashboardUserRequest.js"
import darkMode from "./darkmode.js"

darkMode.showDark()

requestUser.userLogado()

menu.showMenu()
renderUser.verificationToken()
renderUser.btnsMenuUser()