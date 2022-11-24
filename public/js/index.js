const socket = io()

function mostrarMensaje(mensaje) {
    const mensajeParaMostrar = mensaje.map(({fecha, autor, texto}) => {
        return "<li>${fecha} - ${autor}: ${texto}</li>"
    })

    const mensajeHtml = `<ul>${mensajeParaMostrar.join("\n")}</ul>`

    const listaMensaje = document.getElementById(`listaMensaje`)
    listaMensaje.innerHTML = mensajeHtml
}

socket.on(`mensajesActualizados`, menaje => {
    mostrarMensaje(mensaje)
})

const sendButton = document.getElementById(`sendButton`)
sendButton.addEventListener(`click`, e => {
    const inputAutor = document.getElementById(`inputAutor`)
    const inputMensaje = document.getElementById(`inputMensaje`)
    if(inputAutor.value && inputMensaje.value) {
        const mensaje = {
            autor: inputAutor.value,
            texto: inputMensaje.value
        }
        socket.emit(`nuevoMensaje` , mensaje)
    } else {
        alert(`ingrese algun mensaje`)
    }
})