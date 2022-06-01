
const datos = [
    {
        picsum: "https://picsum.photos/id/453/200/300",
        title: "Vestuario Concierto One Republic",
        text: "Colabore con la banda One Republic, diseñandoles todo el vestuario para su conicierto en Chicago. Ellos optaron por usar topa cómoda y ligera, para moverse libremente por esceneario. No querian algo extravagante, porque buscan que su público se siente identificados con ellos a través de su ropa.",
    },
    {
        picsum: "https://picsum.photos/id/822/200/300",
        title: "United Colors of Benetton, Dia de la Madre",
        text: "Con Benetton diseñamos un colección de niños y madres, queríamos que combinaran entre ellos, porque encontrabamos que era una linda forma de conmemorar a mamá. Para esta colección usamos muchos patrones inspirados en la naturaleza y colores vivos.",
    },
    {
        picsum: "https://picsum.photos/id/250/200/300",
        title: "Vogue Cover",
        text: "He hecho múltiples colaboracón con la revista, creando prendas personalizadas para cada famoso que cruza su portada. Para estos proyectos nos juntamos con la revista a definir su enfoque en la portada del mes y luego con la celebridad definimos el vestuario en el cual se sienta cómodo para representar la temática.",
    },
    {
        picsum: "https://picsum.photos/id/736/200/300",
        title: "New York Fashion Week",
        text: "Para este año diseñe un colección que aparecio en NYFW, inspirado en la ciudad con un toque vaguardista. Esta colección se exhibió en las calles de Times Square como una especie de MOBB.",
    },
    {
        picsum: "https://picsum.photos/id/535/200/300",
        title: "Falabella",
        text: "Con Falabella, diseañmos una colección rupturista insipiradas en la calles de Madrid. La moda española es un gran referente en la moda chilena. ",
    },
     {
        picsum: "https://picsum.photos/id/856/200/300",
        title: "Starbucks",
        text: "Para la nueva públicidad de Starbucks, queriamos relejar con la ropa ese contraste entre el mundo laboral y el café que es algo tan hogareño.  ",
    },
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});

window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
