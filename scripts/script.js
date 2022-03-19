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

// FAVORITOS

const d = document;

const favTrue = d.querySelectorAll('.corazonLleno');

const favFalse = d.querySelectorAll('.fa-heart-o');

const fav = d.querySelectorAll('.productoFav');

for (let i = 0; i <= 7; i++) {
    fav[i].addEventListener('click', () => {
        favTrue[i].classList.toggle('d-none');
        if(favTrue[i].classList.contains('d-none')){
            Toastify({
                text: "Se ha eliminado de favoritos",
                duration: 1000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: false,
                style: {
                    marginTop: "30px",
                    borderRadius: "20px",
                    background: "linear-gradient(90deg, rgba(59,71,113,0.8) 0%, rgba(26,37,48,0.8) 100%)",
                },
            }).showToast();
        } else{
            Toastify({
                text: "Se ha añadido a favoritos",
                duration: 1000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: false,
                style: {
                    marginTop: "30px",
                    borderRadius: "20px",
                    background: "linear-gradient(90deg, rgba(59,71,113,0.8) 0%, rgba(26,37,48,0.8) 100%)",
                },
            }).showToast();
        }
    });
};