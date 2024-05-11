const ponteiroHora = document.querySelector("#ponteiro-hora")
const ponteiroMinuto = document.querySelector("#ponteiro-minuto")
const ponteiroSegundo = document.querySelector("#ponteiro-segundo")

function rodarPonteiro(ponteiro, rotacao) {
    ponteiro.style.setProperty("--rotate", rotacao * 360)
}

function ticTac() {
    const dateToday = new Date()
    const s = dateToday.getSeconds() / 60
    const min = (s + dateToday.getMinutes()) / 60
    const h = (min + dateToday.getHours()) / 12

    rodarPonteiro(ponteiroSegundo, s)
    rodarPonteiro(ponteiroMinuto, min)
    rodarPonteiro(ponteiroHora, h)
}

setInterval(ticTac, 1000)