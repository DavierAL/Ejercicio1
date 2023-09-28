class Pelicula {
    title: string;
    director: string;
    yearRelease: number;
    genre: string;
    duration: number;
    sinopsis: string;
    
    constructor(title: string, director: string, yearRelease: number, genre: string, duration: number, sinopsis: string){
        this.title = title;
        this.director = director;
        this.yearRelease = yearRelease;
        this.genre = genre;
        this.duration = duration;
        this.sinopsis = sinopsis;
    }

    informacion(): void {
        console.log(`Título: ${this.title}, Director: ${this.director}, Año de Estreno: ${this.yearRelease}`);
    }

    mostrarInfoDetallada(): void {
        console.log(`Título: ${this.title}, Director: ${this.director}, Año de Estreno: ${this.yearRelease}`);
        console.log(`Género: ${this.genre}, Duración: ${this.duration} minutos`);
        console.log(`Sinopsis: ${this.sinopsis}`);
    }

    reproducir(): void {
        console.log(`Reproduciendo '${this.title}'`);
    }

    detenerReproduccion(): void {
        console.log(`Se ha detenido la reproducción de '${this.title}'`);
    }

}

//Por supuesto mi top 2 peliculas 
const interstellar = new Pelicula(
    "Interstellar",
    "Christopher Nolan",
    2014,
    "Ciencia Ficción",
    169,
    "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
);

const guerraMundialZ = new Pelicula(
    "Guerra Mundial Z",
    "Marc Forster",
    2013,
    "Acción",
    116,
    "Un ex-investigador de la ONU es llamado para ayudar a detener una pandemia de zombies que amenaza con destruir la humanidad."
);

// Utilizar los métodos de las películas
interstellar.informacion();
interstellar.mostrarInfoDetallada();
interstellar.reproducir();
interstellar.detenerReproduccion();

guerraMundialZ.informacion();
guerraMundialZ.mostrarInfoDetallada();
guerraMundialZ.reproducir();
guerraMundialZ.detenerReproduccion();