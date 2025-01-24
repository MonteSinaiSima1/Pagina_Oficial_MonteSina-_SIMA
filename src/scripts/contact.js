document.addEventListener('DOMContentLoaded', function () {
    // -------------------------------
    // Validación y manejo del formulario de contacto
    // -------------------------------
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validar campos vacíos
        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        // Validar formato del correo electrónico
        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Si todo es válido, mostrar mensaje de éxito
        alert(`Gracias, ${name}! Hemos recibido tu mensaje.`);
        contactForm.reset();
    });

    // Función para validar formato de correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // -------------------------------
    // Inicialización del mapa interactivo
    // -------------------------------
    const contactMap = L.map('leaflet-map').setView([22.104724,-102.084444], 16); // Coordenadas de Asientos, Aguascalientes

    // Añadir capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(contactMap);

    // Añadir un marcador en la ubicación de la empresa
    const marker = L.marker([22.104724, -102.084444]).addTo(contactMap);
    marker.bindPopup(`
        <b>Monte Sinai</b><br>
        Principal #49, Col. Viudas de Poniente,<br>
        C.P. 20704, Asientos, Ags.
    `).openPopup();

    // -------------------------------
    // Función para centrar el mapa en caso de errores de renderización
    // -------------------------------
    window.addEventListener('resize', function () {
        contactMap.invalidateSize(); // Ajustar el tamaño del mapa al contenedor
    });
});
