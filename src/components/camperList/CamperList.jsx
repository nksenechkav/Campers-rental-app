// src/components/camperList/CamperList.jsx

import Camper from "../camper/Camper.jsx";
import css from "./CamperList.module.scss";
import { useSelector } from 'react-redux'
import { selectFilteredCampers } from "../../redux/filters/selectors.js";


const CamperList = ({onShowClick}) => {
  const filteredCampers = useSelector(selectFilteredCampers);

  return (
    <ul className={css["camper-list"]}> { 
      filteredCampers.map((camper, index) => (
          <li key={`${camper.id}-${index}`}>
            <Camper camper={camper} onShowClick={onShowClick}/>
          </li>
        ))
      }
    </ul>
  );
};

export default CamperList;