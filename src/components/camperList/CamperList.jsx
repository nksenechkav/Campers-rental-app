// src/components/camperList/CamperList.jsx

import Camper from "../camper/Camper.jsx";
import css from "./CamperList.module.scss";
import { useSelector } from 'react-redux'
// import { selectFilteredCampers } from "../../redux/filters/selectors.js";
import { selectCampers } from "../../redux/campers/selectors.js";


const CamperList = ({onShowClick}) => {
  const campers = useSelector(selectCampers);
  const visibleCount = useSelector((state) => state.campers.visibleCount);
  const displayCount = Math.min(visibleCount, campers.length);
  console.log(campers.length);
  console.log(visibleCount);
  console.log(displayCount);

  return (
    <ul className={css["camper-list"]}> { 
      campers.slice(0, displayCount).map((camper, index) => (
          <li key={`${camper.id}-${index}`}>
            <Camper camper={camper} onShowClick={onShowClick}/>
          </li>
        ))
      }
    </ul>
  );
};

export default CamperList;