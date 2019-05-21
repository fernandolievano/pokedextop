import React from "react";
import Logo from "../../pokeball.svg";

const Home = () => (
  <div className="section">
    <div className="container has-text-centered">
      <img src={Logo} alt="Logo Pokéball" className="logo" />
    </div>
    <div className="container">
      <div className="columns is-multiline is-centered">
        <div className="column">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque omnis repellat quidem tempore quis iste consequatur voluptates blanditiis repudiandae! Perspiciatis corrupti qui quisquam laudantium cupiditate voluptatibus nam, dolorem ipsum!
            </div>
      </div>
    </div>
  </div>
);

export default Home;
