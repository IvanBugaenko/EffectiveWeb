import AppImages from 'res/images';
import classes from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <img
        src={AppImages.marvel_logo}
        className={classes.logo}
        alt="marvel_logo"
      />
      <p className={classes.text}>
        Data provided by Marvel. © {currentYear} MARVEL
      </p>
      <a className={classes.text} href="https://developer.marvel.com">
        developer.marvel.com
      </a>
    </footer>
  );
}
