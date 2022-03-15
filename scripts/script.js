// Buscador

const iconoBuscador = document.querySelector(".fa-search");

const barraBuscador = document.querySelector(".buscador-input")

iconoBuscador.addEventListener("click", () => {
    barraBuscador.classList.toggle("displayn");
    iconoBuscador.classList.toggle("size")
})

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("Elemento de busqueda", formulario.children[0].value);
})


// Usuario

let user = document.querySelector(".fa-user");

user.addEventListener("click", () => {
    Swal.fire({
        title: 'Email',
        input: 'email',
        inputPlaceholder: 'Ingrese su email'
    })

})


// Favoritos


// Carrito de Compras


//FETCH

const form = document.querySelector(".buscador-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("");
    f
    etch(JSON_POST, {
        method: 'POST',
        body: JSON.stringify({
        email: email.value,
        }),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(resultado => resultado.json())
    .then(respuesta => {
        alert(`El correo ${respuesta.email} fue registrado en el sistema`);
    });
});



// Smooth Scrolling
/*
$(document).ready(function(){
    const Desplazar = $(".desplazar");

    Desplazar.click(function(e){
        e.preventDefault();
        $("body", "html").animate({
            scrollTop: $(this.hash).offset().top,
        }, 1000);
    })
})
*/