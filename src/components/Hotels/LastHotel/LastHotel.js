import React from "react";

function LastHotel(props) {
  return (
    <div className="card mb-2 bg-light ">
      <div className="card-header">Ostatnio oglądałeś ten hotel</div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.name}</h5>
          <span>{props.city}</span>
        </div>
        <div
          style={{ width: "100px" }}
          className="ml-auto d-flex justify-content-between"
        >
          <a href="/#" className="btn btn-sm btn-dark">
            Tak
          </a>
          <button onClick={props.onRemove} className="btn btn-sm btn-dark">
            Nie
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastHotel;
