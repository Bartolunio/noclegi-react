import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

const backendHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Warszawa",
    rating: 8.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
    image: "",
  },
  {
    id: 2,
    name: "Dębowy",
    city: "Lublin",
    rating: 8.8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
    image: "",
  },
];

function Hotel(props) {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHotel = () => {
    const currentHotel = backendHotels.find((hotel) => hotel.id === Number(id));
    setHotel(currentHotel);
    setLoading(false);
  };

  useEffect(() => {
    // pobieranie danych
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);

  return loading ? <LoadingIcon /> : <h1>Hotel: {hotel.name}</h1>;
}

export default Hotel;
