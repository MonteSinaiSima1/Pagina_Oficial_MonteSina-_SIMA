// Mapa de proyectos
const projectsMap = L.map('map').setView([23.6345, -102.5528], 5); // Centrado en México

// Añadir capa base de OpenStreetMap para el mapa de proyectos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap contributors'
}).addTo(projectsMap);

// Icono único para todos los proyectos
const projectIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png', // Icono para los proyectos
    iconSize: [40, 40], // Tamaño del icono
    iconAnchor: [20, 40], // Punto del icono que estará anclado al mapa
    popupAnchor: [0, -40] // Posición del popup respecto al icono
});

// Datos de los proyectos
const proyectos = [
    { coords: [21.8818, -102.2913], popup: "<b>Soriana Plaza San Marcos</b><br>Aguascalientes" },
    { coords: [20.0704, -97.0613], popup: "<b>Chedraui Martínez de la Torre</b><br>Veracruz" },
    { coords: [14.9089, -92.2603], popup: "<b>Chedraui Tapachula</b><br>Chiapas" },
    { coords: [16.7460, -93.1154], popup: "<b>Soriana Poliforum</b><br>Tuxtla Gutiérrez, Chiapas" },
    { coords: [19.0413, -98.2062], popup: "<b>Chedraui Plaza Cristal</b><br>Puebla" },
    { coords: [18.9240, -99.2318], popup: "<b>Bodega Aurrera Sumiya</b><br>Morelos" },
    { coords: [18.8812, -99.1967], popup: "<b>Bodega Aurrera Civac</b><br>Morelos" },
    { coords: [19.3957, -99.0343], popup: "<b>Bodega Aurrera Rancho Gde.</b><br>Ciudad Neza" },
    { coords: [20.6668, -103.3918], popup: "<b>Bodega Aurrera 8 de Julio</b><br>Guadalajara, Jalisco" },
    { coords: [21.1236, -101.6844], popup: "<b>Bodega Aurrera Hilario Medina</b><br>León, Guanajuato" },
    { coords: [22.1499, -100.9726], popup: "<b>Soriana Hiper Glorieta</b><br>San Luis Potosí" },
    { coords: [17.9584, -102.1942], popup: "<b>Mercado Soriana</b><br>Lázaro Cárdenas, Michoacán" },
];

// Añadir marcadores al mapa de proyectos
proyectos.forEach(function (proyecto) {
    L.marker(proyecto.coords, { icon: projectIcon }).bindPopup(proyecto.popup).addTo(projectsMap);
});

// Mapa de la sucursal matriz
const branchMap = L.map('leaflet-map').setView([22.104690, -102.084440], 13); // Coordenadas de Asientos, Ags.

// Añadir capa base de OpenStreetMap para el mapa de la sucursal matriz
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(branchMap);

// Añadir marcador al mapa de la sucursal matriz
L.marker([21.8853, -102.2916]).addTo(branchMap)
    .bindPopup('Sucursal Matriz: Principal #49, Asientos, Ags.')
    .openPopup();
