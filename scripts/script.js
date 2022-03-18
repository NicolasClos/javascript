// BUSCADOR

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


// USUARIO

let user = document.querySelector(".fa-user");

user.addEventListener("click", () => {
    Swal.fire({
        title: 'Email',
        input: 'email',
        inputPlaceholder: 'Ingrese su email'
    })

})


// LISTADO DE PRODUCTOS - LO MÁS VENDIDO

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carouselItems'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: {
            prev: '.btnCarouselAnterior',
            next: '.btnCarouselSiguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 4,
            }
        }]
    });
});

