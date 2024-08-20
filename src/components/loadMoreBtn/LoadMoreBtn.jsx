import css from './LoadMoreBtn.module.scss';
import { useDispatch } from 'react-redux';
import { loadMore } from '../../redux/campers/slice.js'; // Імплементуйте цей шлях відповідно до вашої структури

const LoadMoreBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className={css["btn-container"]}>
      <button
        className={css.btn}
        onClick={() => dispatch(loadMore())}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;