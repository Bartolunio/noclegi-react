import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";
import style from "./Hotels.module.css";
class Hotels extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Oferty:</h2>
        {this.props.hotels.map((hotel) => (
          <Hotel key={hotel.id} {...hotel} />
        ))}
      </div>
    );
  }
}

export default Hotels;
