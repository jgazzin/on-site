const listUsers= async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users= await response.json();
    
    users.forEach((user, formulario) => {
    console.log(user);}) 
} ;

window.addEventListener('load', ()=> {
    listUsers();
    const form = document.getElementById('formContacto')
    const nombreyapellido = document.getElementById('nombreyapellido')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    const elegirplan = document.getElementById('elegirplan')
    const msje = document.getElementById('msje')

   form.addEventListener('submit', (e) => {
        e.preventDefault()
        if ( validaCampos() ) {
            form.submit() }
    }) 

    const validaCampos = () => {
        const nombreyapellidoValor = nombreyapellido.value.trim()
        const emailValor = email.value.trim()
        const telefonoValor = telefono.value.trim()
        const elegirplanValor = elegirplan.value.trim()
        const msjeValor = msje.value.trim()

        //VALIDACIÓN NOMBRE Y APELLIDO //
        if(!nombreyapellidoValor){
            validaError(nombreyapellido, 'Campo vacío')
        } else {
            validaOk(nombreyapellido)
        }  

        //VALIDACIÓN EMAIL //
        if(!emailValor){
            validaError(email, 'Campo vacío')
        } else if(!validaEmail(emailValor)) {
            validaError(email, 'El e-mail no es válido')
        } else {
            validaOk(email)
        }

        // VALIDACIÓN TELEFONO //
        if(!telefonoValor) {
            validaError(telefono, 'Campo vacío')
        } else if (telefonoValor.length < 10) {
            validaError(telefono, 'Ingresá un número telefónico')
        } else { 
            validaOk(telefono)
        }

        // VALIDACIÓN ELEGIR PLAN // 
        if(elegirplanValor == 0) {
            validaError(elegirplan, 'Seleccioná un plan')
        } else {
            validaOk(elegirplan)
        }
        
        //VALIDACIÓN MENSAJE //
        if(!msjeValor) {
            validaError(msje, 'Campo vacío')
        } else if (msjeValor.length < 10) {
            validaError(msje, 'Por favor, escribí tu consulta')
        } else {
            validaOk(msje)
        }  
    }


    const validaError = (input, mensaje, select) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = mensaje

        formControl.className = 'form-control error'
    }
    const validaOk = (input, mensaje, select) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
    }
    const er =  /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
})
