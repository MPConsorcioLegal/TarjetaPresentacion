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

//Agregar Contacto
document.getElementById("btnContacto").addEventListener("click", function() {
    let vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lic. Julio Morales
TEL;TYPE=CELL:+50259958008
EMAIL:jmoralesconsorciolegalmp@gmail.com
END:VCARD`;


    let blob = new Blob([vcard], { type: "text/vcard" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "LicJulioMorales.vcf"; 
    a.click();

    URL.revokeObjectURL(url);
    });
