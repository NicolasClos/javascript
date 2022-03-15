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

const d = document;

const form = d.getElementById("formulario");

const buscador = d.getElementById('buscador-input');

buscador.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        e.preventDefault();
        form.submit();
    }
});

form.addEventListener("submit", async e => {
    e.preventDefault();

    const text = e.target.text.value;
    Fetch( {
        method: 'POST',
        body: JSON.stringify({
            text: text,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(resultado => resultado.json())
    .then(respuesta => {
        ;
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