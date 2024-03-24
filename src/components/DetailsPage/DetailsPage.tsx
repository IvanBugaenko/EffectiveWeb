import { Link } from 'react-router-dom';
import classes from './DetailsPage.module.scss';
import NavigationLink from 'types/navigationLink';
import { LinkCard } from 'types/linkCard';

export default function DetailsPage(props: {
  card: LinkCard;
  linkedCards: NavigationLink[];
  categoryLink: string;
}) {
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
        src={props.card.image_url}
        alt="card_image"
      />
      <div className={classes.info_container}>
        <div className={classes.text_info}>
          <h1 className={classes.header}>{props.card.name}</h1>
          <p className={classes.description}>{props.card.description}</p>
        </div>
        <div className={classes.link_info}>
          <h1 className={classes.header}>{props.categoryLink}</h1>
          <ul className={classes.links}>{getLinks(props.linkedCards)}</ul>
        </div>
      </div>
    </section>
  );
}
