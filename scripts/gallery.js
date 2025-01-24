// src/scripts/gallery.js

const slidesContainer = document.querySelector('.slides');

// Generar dinámicamente los nombres de las imágenes y añadirlas al slider
for (let i = 1; i <= 120; i++) {
    const paddedNumber = String(i).padStart(3, '0'); // Asegurar que los números tengan 3 dígitos (001, 002, ...)
    const imageName = `image${paddedNumber}.jpg`; // Crear el nombre completo de la imagen
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `<img src="./src/assets/gallery/${imageName}" alt="Imagen ${paddedNumber}">`;
    slidesContainer.appendChild(slide);
}

// Deslizamiento automático del slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Asegurar que el índice esté dentro del rango
    currentSlide = (index + totalSlides) % totalSlides;

    // Mover las diapositivas
    const offset = -currentSlide * 100; // Desplazamiento en %
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Configurar el intervalo para deslizamiento automático
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Cambiar cada 3 segundos
