// src/components/camperList/CamperList.jsx

import Camper from "../camper/Camper.jsx";
import css from "./CamperList.module.scss";
import { useSelector } from 'react-redux'
import { selectFilteredCampers } from "../../redux/filters/selectors.js";


const CamperList = ({onImgClick}) => {
  const filteredCampers = useSelector(selectFilteredCampers);

  return (
    <ul className={css["camper-list"]}> { 
      filteredCampers.map(camper => (
          <li key={camper.id}>
            <Camper camper={camper} onImgClick={onImgClick}/>
          </li>
        ))
      }
    </ul>
  );
};

export default CamperList;