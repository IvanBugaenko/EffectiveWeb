import { LinkCard } from 'types/linkCard';
import classes from './LinkCardExemplar.module.scss';
import { Link } from 'react-router-dom';

export default function LinkCardExemplar(props: { link_card: LinkCard }) {
  return (
    <Link to={props.link_card.id.toString()} style={{ textDecoration: 'none' }}>
      <div className={classes.link_card}>
        <img
          className={classes.image}
          src={props.link_card.image_url}
          alt="card_image"
        />
        <div className={classes.text_container}>
          <h2 className={classes.name}>{props.link_card.name}</h2>
          <p className={classes.description_text}>
            {props.link_card.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
