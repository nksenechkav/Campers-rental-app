// src/components/camper/Camper.jsx

import css from "./Camper.module.scss";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";
// import { deleteContact } from "../../redux/campers/operations";
// import { useDispatch } from "react-redux";

const Camper = ( {camper: {name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews}, onImgClick} ) => {
  // const dispatch = useDispatch();

  // const onDelete = () => dispatch(deleteContact(id));

 function handleClick() {

    const content = {
      modal: gallery,
      name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews
    };

    onImgClick(content);
  }


  return (
    <div className={css.item}>
      <div className={css["image-wrapper"]}> 
      <img className={css["image"]} src={gallery} alt={name}/>
      </div>
      <div className={css["info-wrapper"]}> 
      <ImPhone className="my-icon" size="24"/>
      <p className={css.info}>{price}</p>
      </div>
      {/* <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button> */}
    </div>
  );
};

export default Camper;