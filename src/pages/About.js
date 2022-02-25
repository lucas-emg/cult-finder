import { useEffect } from "react";
import logo from "../images/logo_tmdb.svg"
import ironhack from "../images/ironhack_logo.png"

const About = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div >
      <div className="about-us-container"> 

        <div className="about-us-imgs">
        
          <img src={logo} alt="logo_tmdb"/>
          <img src={ironhack} alt="logo_ironhack"/>

        </div>

        <div className="about-us-text">

        <h1 className="individual-movie-title">About Us</h1>
        <p className="individual-movie-details">
          This project was created by Lucas Mendes Gabriel and Erico Silva as the Module 2 of the Irohack Web Development
          Bootcamp. The idea of the project is to provide users with a library of movies, with information about the movies they are
          looking for, as well as providing them with a randomic suggestion. The entire project uses the TMDB API, which has served
          our student needs greatly!
        </p>

        </div>

      </div>
  
    </div>
  );
};

export default About;