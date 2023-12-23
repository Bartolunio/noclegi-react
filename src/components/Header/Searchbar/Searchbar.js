import React, { useState } from "react";

function Searchbar(props) {
  const [term, setTerm] = useState("");

  const search = () => {
    props.onSearch(term);
    // console.log("szukaj", term);
  };
  const onkeydownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="d-flex">
      <input
        value={term}
        onKeyDown={onkeydownHandler}
        onChange={(e) => setTerm(e.target.value)}
        className="form-control "
        type="text"
        placeholder="Szukaj..."
      ></input>
      <button onClick={search} className="btn btn-secondary">
        Szukaj
      </button>
    </div>
  );
}

export default Searchbar;
