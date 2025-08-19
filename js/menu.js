const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Boton de WhatsApp
document.getElementById("whatsapp1").addEventListener("click", function() {
            const numeroGuatemala = "50259958008";
            const mensaje = " ";  
            const url = `https://wa.me/${numeroGuatemala}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, '_blank');
});
