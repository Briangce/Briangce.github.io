document.addEventListener("DOMContentLoaded", errorOff)
document.querySelector('button#btn').addEventListener('click', cargar)
var input = document.querySelector("input.form__input")

class billetes {
    constructor(v, c) {
        this.v = v
        this.c = c
    }
}
var billete = []
billete.push(new billetes(1000, 3))
billete.push(new billetes(50, 3))
billete.push(new billetes(20, 2))
billete.push(new billetes(10, 1))

var res = document.getElementById('res')
var section = document.getElementById('s1')
document.getElementById('container').insertBefore(document.createElement('p'), section)
var disp = document.getElementsByTagName('p')[0]

function errorOff() {
    input.className = input.className.replace("form__input--error", "");
}

function error() {
    input.className += " form__input--error"
}

function disponible() {
    if (valTota() != 0) {
        disp.innerHTML = `Hay billetes de `
        for (i in billete) {
            if (billete[i].c > 0) {
                disp.innerHTML += `${billete[i].v}R$ `
            }
        }
    } else {
        error()
        disp.innerHTML = `Ya no hay billetes disponibles`
    }
}
disponible()

function valTota() {
    var aux = 0
    for (i in billete) {
        aux += billete[i].v * billete[i].c
    }
    return aux
}

function cargar() {
    var plata = document.getElementById('valor').value
    var valTotalDisp = valTota()
    var cant = []
    for (i in billete) {
        cant[i] = 0
    }

    function dinerOk() {
        var aux = 0
        for (i in billete) {
            aux += cant[i] * billete[i].v
        }
        return aux
    }

    function verificar(valor, cantidad, i) {

        if (valor <= plata) {
            cant[i] = Math.floor(plata / valor)
            if (cantidad >= cant[i]) {
                plata -= cant[i] * valor
            } else {
                cant[i] = cantidad
                plata -= cant[i] * valor
            }
        }
    }

    if (plata <= 0) {
        res.innerHTML = "<p>Ha ingresado un monto inválido</p>"
        error()
    } else if (valTotalDisp < plata) {
        res.innerHTML = "<p>Por los momentos no está disponible ese monto</p>"
        error()
    } else {
        for (let i in billete) {
            verificar(billete[i].v, billete[i].c, i)
        }

        if (plata == 0) {
            for (let i in billete) {
                billete[i].c -= cant[i]
            }
            errorOff()
            res.innerHTML = `<p>Tu dinero está listo, son: ${dinerOk()}R$</p>`
            disponible()

        } else {
            error()
            res.innerHTML = "<p>Ha ingresado un monto inválido o no disponible</p>"
        }
    }
}