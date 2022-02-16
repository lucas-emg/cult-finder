import React from "react";
import logo from "../images/logo_tmdb.svg"

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>

        {/* <img src="" alt=""/> This will be ironhack image*/}
        
        <img src={logo} alt="logo_tmdb"/>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor
          odio at convallis ornare. Suspendisse venenatis turpis magna, vitae
          gravida elit feugiat nec. Suspendisse fringilla augue vitae tempor
          condimentum. Nam auctor consequat tellus, non facilisis massa dictum
          sit amet. Proin dignissim lacus id hendrerit semper. Vivamus in
          venenatis justo. Donec posuere venenatis turpis. Vivamus velit eros,
          porta et malesuada sed, bibendum luctus ligula. Vivamus vehicula ante
          a pulvinar scelerisque. Vivamus venenatis laoreet egestas.
        </p>

      </div>
  
    </div>
  );
};

export default About;