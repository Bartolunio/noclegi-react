import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../../components/UI/LoadingIcon/LoadingIcon";

function Hotel(props) {
  const { id } = useParams();
  const [hotel, stateHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchHotel = () => {
    stateHotel({
      id: 2,
      name: "Dębowy",
      city: "Lublin",
      rating: 8.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
      image: "",
    });
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);
  return loading ? <LoadingIcon /> : <h1>To jest hotel:{hotel.name}</h1>;
}

export default Hotel;
