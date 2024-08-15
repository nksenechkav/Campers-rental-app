import { Navigation } from '../navigation/Navigation';
// import { UserMenu } from '../userMenu/UserMenu';
// import { useSelector } from 'react-redux';
// import { AuthNav } from '../authNav/AuthNav';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.scss';

export const AppBar = () => {

  return (
    <header className={css.header}>
      <Navigation className={css.navigation}/>
    </header>
  );
};
