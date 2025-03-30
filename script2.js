// Arrays de fotos y videos
const photos = [

    { src: "imagenes/cuadrilla2/semana1-11.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-10.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-9.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-8.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-7.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-6.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-5.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-4.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-3.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-2.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "imagenes/cuadrilla2/semana1-1.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 2 },
    { src: "imagenes/cuadrilla2/semana1.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 2 },
    { src: "imagenes/cuadrilla2/semana.jpeg", description: "Circuito Arichuna Cuadrilla 2", week: 2 },
];

const videos = [
    
    //{ src: "videos/cuadrilla2/semana1-3.mp4", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    //{ src: "videos/cuadrilla2/semana1-2.mp4", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    //{ src: "videos/cuadrilla2/semana1-1.mp4", description: "Circuito Arichuna Cuadrilla 2", week: 1 },
    { src: "videos/cuadrilla2/semana1.mp4", description: "Circuito Arichuna Cuadrilla 2", week: 2 }
];

// Obtenemos las semanas únicas
const weeks = [...new Set([...photos.map(photo => photo.week), ...videos.map(video => video.week)])];

// Referencias a los elementos del DOM
const photoGallery = document.getElementById('photoGallery');
const videoGallery = document.getElementById('videoGallery');
const filterSection = document.getElementById('filterSection');

// Crear botones de filtro dinámicamente
function createFilterButtons() {
    weeks.forEach(week => {
        const button = document.createElement('button');
        button.textContent = `Semana ${week}`;
        button.onclick = () => filterByWeek(week);
        filterSection.appendChild(button);
    });
}

// Mostrar todas las fotos y videos
function displayAllMedia() {
    photos.forEach(photo => displayMedia(photo, 'image', photoGallery));
    videos.forEach(video => displayMedia(video, 'video', videoGallery));
}

// Mostrar cada item de la galería
function displayMedia(item, type, gallery) {
    const mediaElement = document.createElement('div');
    mediaElement.classList.add('gallery-item');
    mediaElement.classList.add(`week-${item.week}`);

    if (type === 'image') {
        mediaElement.innerHTML = `
            <img src="${item.src}" alt="${item.description}">
            <p>${item.description}</p>
        `;
    } else {
        mediaElement.innerHTML = `
            <video controls>
                <source src="${item.src}" type="video/mp4">
            </video>
            <p>${item.description}</p>
        `;
    }

    gallery.appendChild(mediaElement);
}

// Función para filtrar por semana
function filterByWeek(week) {
    const photoItems = document.querySelectorAll('#photoGallery .gallery-item');
    const videoItems = document.querySelectorAll('#videoGallery .gallery-item');

    photoItems.forEach(item => {
        if (item.classList.contains(`week-${week}`)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    videoItems.forEach(item => {
        if (item.classList.contains(`week-${week}`)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Inicialización
createFilterButtons();
displayAllMedia();
