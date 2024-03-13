import PropTypes from "prop-types";
import styles from "./Hotel.module.css";
import hotelImg from "../../../assets/images/hotel1.jpg";
import ThemeContext from "../../../context/themeContext";
import { useContext } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

function Hotel({ onOpen, name, city, rating, id, description }) {
  const theme = useContext(ThemeContext);
  const [auth] = useAuth();

  const clickHandler = (e) => {
    // e.preventDefault();
    onOpen({ name, city, rating, id, description });
  };

  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img src={hotelImg} alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{name}</p>
                <span>{city}</span>
              </div>
              <div className="col text-right">
                <h5>Ocena: {rating}</h5>
                <Link
                  onClick={clickHandler}
                  to={`/hotele/${id}`}
                  className={`btn btn-${theme.color} mt-2 px-4`}
                >
                  Pokaż
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12">
            <p className={styles.description}>{description}</p>

            {auth ? (
              <p className="mt-2">Dostępność: 4 pokoje</p>
            ) : (
              <p className="mt-2">Dostępność: Po zalogowaniu</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Hotel.propTypes = propTypes;

export default Hotel;
