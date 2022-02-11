import axios from "axios";


class apiMovies {
    constructor () {
        this.api = axios.create({
            baseURL:`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&page=1&query=`
        })

    }
}