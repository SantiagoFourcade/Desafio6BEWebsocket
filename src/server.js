const express = require(`express`)
const {Server: HttpServer} = require(`http`)
const {Server: IOServer} = require(`socket.io`)

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static(`public`))

const mensaje = []

io.on(`connection`, (socket) => {
    socket.emit(`mensajeActualizados`, mensaje)

    socket.on(`nuevoMensaje` , mensaje => {
        mensaje.fecha = new Date().toLocaleString()
        mensaje.push(mensaje)
        io.sockets.emit(`mensajeActualizados`, mensaje)
    })
})

const server = httpServer.listen(8080, () => {
    console.log(`servidor conectado en puerto ${server.address().port}`)
})