import axios from "axios";

class apiMovies {
    constructor () {
        this.api = axios.create({
            baseURL:`https://api.themoviedb.org/3/search`,
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        })

        this.params = {api_key:process.env.REACT_APP_API_KEY}

    }

    randomLetter = () => {
      const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z" ]
      const randomNumber = Math.floor(Math.random() * 26)
      
      return alphabet[randomNumber]
    }
    
    randomNumber = (number, min = 0) => {
      return Math.floor(Math.random() * (number - min) + min)
    }

    getRandomMovie = async () => {
      const searchedLetter = this.randomLetter()
      try {
        const { data } = await this.api(`/movie`, {
          params:{
            ...this.params,
            query:searchedLetter
          }})
        
        const { data:{ results }} = await this.api(`/movie`, {
          params:{
            ...this.params,
            page: this.randomNumber(data.total_pages, 1),
            query:searchedLetter
            
          }})

        const randomMovie = results[this.randomNumber(results.length - 1)]
        return randomMovie
      } catch {
        throw new Error ("Could not fetch the letter searched")
      }
    }

    getOnemovie = async (id) => {
      try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6774c2e6f6d436c76de285ed46784876&language=en-US`)
        return data
      } catch {
        throw new Error ("Could not fetch this movie")
      }
    }

    getSearchMovies = async (search) => {
      try {
        const { data } = await this.api(`/movie`, 
        {params: {
          ...this.params,
          query: search,}
        })
        return data
      } catch {
        throw new Error ("Could not fetch the search")
      }
    }
}

export default new apiMovies()