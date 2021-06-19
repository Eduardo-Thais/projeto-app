//importanto bibliotecas

const express = require('express')
const path    = require('path')

//indicnado folder para produção
const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, 'dist'))

//utilizando modo history do vuejs

app.use(staticFileMiddleware)

//indicando o index.html
app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/src/main.js'))
})

//inicializando o servidor express
var port = process.env.PORT || 9090
app.listen(port, function () {
    console.log( 'Express serving on 9090!' )
})