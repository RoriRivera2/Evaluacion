const reproductor = document.getElementById('reproductor');
const playPause = document.getElementById('play-pause');
const volumen = document.getElementById('volumen');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const listaReproduccion = document.getElementById('lista-reproduccion');

// Array con canciones y artistas
const canciones = [
    { titulo: 'Canción 1', artista: 'Artista 1', archivo: 'Primera_Cancion.mp3' },
    { titulo: 'Canción 2', artista: 'Artista 2', archivo: 'Segunda_Cancion.mp3' },
    { titulo: 'Canción 3', artista: 'Artista 3', archivo: 'Tercera_Cancion.mp3' },
    { titulo: 'Canción 4', artista: 'Artista 4', archivo: 'Cuarta_Cancion.mp3' },
    { titulo: 'Canción 5', artista: 'Artista 5', archivo: 'Quinta_Cancion.mp3' },
];


// Índice actual de la canción
let indiceActual = 0;

// Funcionalidad para pausar/reanudar la reproducción
playPause.addEventListener('click', () => {
    if (reproductor.paused) {
        reproductor.play();
        playPause.textContent = 'Pausa';
    } else {
        reproductor.pause();
        playPause.textContent = 'Play';
    }
});

// Funcionalidad para ajustar el volumen
volumen.addEventListener('input', () => {
    reproductor.volume = parseFloat(volumen.value);
});

// Funcionalidad para avanzar/retroceder entre canciones
anterior.addEventListener('click', () => {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = canciones.length - 1;
    }
    reproductor.src = canciones[indiceActual].archivo;
    reproductor.play();
    actualizarLista();
});

siguiente.addEventListener('click', () => {
    indiceActual++;
    if (indiceActual >= canciones.length) {
        indiceActual = 0;
    }
    reproductor.src = canciones[indiceActual].archivo;
    reproductor.play();
    actualizarLista();
});

// Funcionalidad para actualizar la lista de reproducción
function actualizarLista() {
    listaReproduccion.innerHTML = '';
    canciones.forEach((cancion, indice) => {
        const li = document.createElement('li');
        li.textContent = `${cancion.titulo} - ${cancion.artista}`;
        if (indice === indiceActual) {
            li.classList.add('activo');
        }
        listaReproduccion.appendChild(li);
    });
}

// Inicializar la lista de reproducción
reproductor.src = canciones[0].archivo;
actualizarLista();