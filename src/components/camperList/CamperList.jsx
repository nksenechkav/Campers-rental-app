// src/components/camperList/CamperList.jsx

import Camper from "../camper/Camper.jsx";
import css from "./CamperList.module.scss";
import { useSelector } from 'react-redux'
import { selectFilteredCampers } from "../../redux/filters/selectors.js";


const CamperList = () => {
  const filteredCampers = useSelector(selectFilteredCampers);

  return (
    <ul className={css["camper-list"]}>
      {filteredCampers.length ? (
        filteredCampers.map(camper => (
          <li key={camper.id}>
            <Camper
              name={camper.name}
              price={camper.price}
            />
          </li>
        ))
      ) : (
        <p>No campers available.</p>
      )}
    </ul>
  );
};

export default CamperList;