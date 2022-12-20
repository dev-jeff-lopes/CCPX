const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const dataLancamento = "22 dec 2022"

function countDown(){
    const dataLanc = new Date(dataLancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 /60 % 24)
    const finalMinutos = Math.floor(segTotal / 60 % 60)
    const finalSegundos = Math.floor(segTotal % 60)

    dia.innerText = tempoFormat(finalDias)
    hora.innerText = tempoFormat(finalHoras)
    minuto.innerText = tempoFormat(finalMinutos)
    segundo.innerText = tempoFormat(finalSegundos)
    

}

function tempoFormat(tempo){
    return tempo < 10 ? `0${tempo}` : tempo 
}


countDown()
setInterval(countDown, 1000)

