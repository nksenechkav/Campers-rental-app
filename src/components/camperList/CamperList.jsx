import Camper from "../camper/Camper";
import css from "./CamperList.module.scss";
import { useSelector } from 'react-redux'
import { selectFilteredCampers } from "../../redux/filters/selectors";


const CamperList = () => {
  const filteredCampers = useSelector(selectFilteredCampers);

  return (
    <ul className={css["camper-list"]}>
      {filteredCampers.map((camper) => {
        return (
          <li key={camper.id}>
            <Camper
              id={camper.id}
              name={camper.name}
              number={camper.price}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CamperList;