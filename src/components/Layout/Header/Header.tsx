import AppImages from 'res/images';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import NavigationLink from 'types/navigationLink';

export default function Header(props: { buttons: NavigationLink[] }) {
  const getNavMenu = (buttons: NavigationLink[]) => {
    return buttons.map((button) => (
      <li>
        <NavLink
          to={button.link}
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          {button.text}
        </NavLink>
      </li>
    ));
  };
  return (
    <header className={classes.header}>
      <img
        src={AppImages.marvel_logo}
        className={classes.logo}
        alt="marvel_logo"
      />
      <nav>
        <ul className={classes.nav_list}>{getNavMenu(props.buttons)}</ul>
      </nav>
    </header>
  );
}
