import menu from "./dashAdmin.js"
import request from "./dashRequest.js"
import render from "./dasboardRender.js"
import darkMode from "./darkmode.js"

darkMode.showDark()

menu.showMenu ()

render.btnRender()

render.verificacaoAdmin()

render.sair()