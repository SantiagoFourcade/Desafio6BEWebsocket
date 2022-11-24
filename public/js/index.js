const socket = io()

function mostrarMensajes(mensajes) {
    const mensajesParaMostrar = mensajes.map(({fecha, autor, texto}) => {
        return "<li>${fecha} - ${autor}: ${texto}</li>"
    })

    const mensajesHtml = `<ul>${mensajesParaMostrar.join("\n")}</ul>`

    const listaMensajes = document.getElementById(`listaMensajes`)
    listaMensajes.innerHTML = mensajesHtml
}

socket.on(`mensajesActualizados`, menajes => {
    mostrarMensajes(mensajes)
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