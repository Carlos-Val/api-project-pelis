const Film = require("../models/movie");

class MovieController {

    constructor() {

    }

    async showMovies() {
        return Film.find();
    }

    async store(film) {
        return Film.create(film);
    }

    async update(id, film) {
        return Film.findByIdAndUpdate(id, film);
    }

    async destroy(id) {
        return Film.findByIdAndRemove(id);
    }

}

let movieController = new MovieController();
module.exports = movieController;