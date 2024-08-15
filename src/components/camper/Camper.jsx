import css from "./Camper.module.scss";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";
// import { deleteContact } from "../../redux/campers/operations";
// import { useDispatch } from "react-redux";

const Camper = ( { name, price } ) => {
  // const dispatch = useDispatch();

  // const onDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.item}>
      <div>  
      <div className={css["icon-wrapper"]}> 
      <ImUser className="my-icon" size="24"/>
      <p className={css.info}>{name}</p>
      </div>
      <div className={css["icon-wrapper"]}> 
      <ImPhone className="my-icon" size="24"/>
      <p className={css.info}>{price}</p>
      </div>
      </div>
      {/* <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button> */}
      </div>
  );
};

export default Camper;