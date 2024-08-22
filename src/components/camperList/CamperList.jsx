// src/components/camperList/CamperList.jsx

import Camper from "../camper/Camper.jsx";
import css from "./CamperList.module.scss";
import { useSelector } from 'react-redux'
import { selectFilteredCampers } from "../../redux/filters/selectors.js";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn.jsx";
import { selectCampers } from "../../redux/campers/selectors.js";
import { useState } from "react";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const [visibleItems, setVisibleItems] = useState(4);
  const selectedCampers = useSelector(selectFilteredCampers);
  const campersToShow = selectedCampers.slice(0, visibleItems);
  

  function handleLoadMore() {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  }
  const hasMoreItems = visibleItems < campers.length;
  
  return (
    <>
    <ul className={css["camper-list"]}> { 
      campersToShow.map((camper) => (
          <li key={`${camper._id}`}>
            <Camper camper={camper} />
          </li>
        ))
      }
    </ul>
     {hasMoreItems && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
    
  );
};

export default CamperList;