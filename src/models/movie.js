export default class Movie {
    constructor(data) {
        this.id = data.id,
        this.genres = data.genres,
        this.poster = data.poster,
        this.backdrop = data.backdrop,
        this.title = data.title,
        this.overview = data.overview,
        this.imdbRating = data.imdbRating,
        this.director =
            typeof data.director === "string"
                ? data.director
                : data.director.join(", ");
        
        this.releaseDate = data.releaseDate,
        this.duration = data.duration,
        this.cast = data.cast
    }
}