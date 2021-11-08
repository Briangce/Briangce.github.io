const express = require('express')
const app = express()
const path = require('path')
app.get('/', inicio)

app.use(express.static(path.join(__dirname, 'public')))

function inicio(peticion, resultado) {
    resultado.sendFile(__dirname + '/index.html');
}

app.listen(3000)