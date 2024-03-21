import getObjectById from 'mock/getObjectById';
import { Link, useLocation } from 'react-router-dom';
import classes from './DetailsPage.module.scss';
import NavigationLink from 'types/navigationLink';
import AppStrings from 'res/strings';

export default function DetailsPage() {
  const locParams = useLocation().pathname.split('/');
  const category = locParams[1];
  const id = Number(locParams[2]);
  const info = getObjectById(id, category)!;

  const categoryLink: string =
    category === AppStrings.characters_link.toLowerCase()
      ? AppStrings.comics_link
      : AppStrings.characters_link;

  const getLinks = (nav_links: NavigationLink[]) => {
    return nav_links.map((nav_link) => (
      <li className={classes.link}>
        <Link to={`../../${nav_link.link}`}>{nav_link.text}</Link>
      </li>
    ));
  };

  return (
    <section className={classes.details_page}>
      <img
        className={classes.wall_image}
        src={info.image_url}
        alt="card_image"
      />
      <div className={classes.info_container}>
        <div className={classes.text_info}>
          <h1 className={classes.header}>{info.name}</h1>
          <p className={classes.description}>{info.description}</p>
        </div>
        <div className={classes.link_info}>
          <h1 className={classes.header}>{categoryLink}</h1>
          <ul className={classes.links}>{getLinks(info.linked_cards)}</ul>
        </div>
      </div>
    </section>
  );
}
