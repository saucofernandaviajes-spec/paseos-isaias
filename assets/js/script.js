
// Functional Mobile Navbar
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

if (menuClose) {
    menuClose.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            toggleMenu();
        }
    });
});

// Scroll Reveal System
const revealCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(element => {
    revealObserver.observe(element);
});

// Form Handling to WhatsApp del INDEX
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('userName').value;
        const phone = document.getElementById('userPhone').value;
        const message = document.getElementById('userMessage').value;

        const phone_number = "5491166724166";

        const text = `Hola! \nSoy ${name}.\nMi teléfono es ${phone}.\nConsulta: ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phone_number}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    });
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const nav = document.querySelector('nav');
            const navHeight = nav ? nav.offsetHeight : 0;

            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Form detalle viaje
function sendWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const cantidad = document.getElementById('cantidad').value;
    const mensaje = document.getElementById('mensaje').value;
    const viaje = document.getElementById('tituloViaje').innerText;

    if (!nombre || !telefono) {
        alert('Por favor completa tu nombre y teléfono.');
        return;
    }

    const wpNumber = '5491166724166';

    const baseText = `Hola!
Soy ${nombre}.
Mi teléfono es ${telefono}.
Me interesa el viaje: ${viaje}.
Cantidad de pasajes: ${cantidad}.
Consulta: ${mensaje}.`;

    const encodedText = encodeURIComponent(baseText);
    const wpUrl = `https://wa.me/${wpNumber}?text=${encodedText}`;

    window.open(wpUrl, '_blank');
}