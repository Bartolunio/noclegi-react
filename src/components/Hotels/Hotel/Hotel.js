import React from "react";
import style from "./Hotel.module.css";
import hotelImg from "../../../assets/images/hotel1.jpg";

function Hotel(props) {
  return (
    <div className={`card ${style.Hotel}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={hotelImg}
              alt=""
              className="img-fluid img-thumbnail"
            ></img>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={style.title}>{props.name}</p>
                <span>{props.city}</span>
              </div>
              <div className="col text-end">
                <h5>Ocena: {props.rating}</h5>
                <a href="#section" className="btn btn-primary px-5 mt-2">
                  Pokaż
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className={style.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
