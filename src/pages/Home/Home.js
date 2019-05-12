import React, { Component } from "react";
import Logo from "../../pokeball.svg";

class Home extends Component {
  render() {
    return (
      <div className="section">
        <div className="container has-text-centered">
          <img src={Logo} alt="Logo Pokéball" className="logo" />
        </div>
        <div className="container">
          <h3 className="title">Home</h3>
          <p>
            Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
            Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,
            eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      </div>
    );
  }
}

export default Home;
