import { LinkCard } from 'types/linkCard';
import Search from './Search/Search';
import classes from './LinkCardsPage.module.scss';
import LinkCardExemplar from './LinkCardExemplar/LinkCardExemplar';

export default function LinkCardsPage(props: {
  header: string;
  placeholder: string;
  link_cards: LinkCard[];
}) {
  const func = (link_card: LinkCard) => {
    return <LinkCardExemplar link_card={link_card}></LinkCardExemplar>;
  };
  return (
    <section className={classes.link_cards_container}>
      <div className={classes.header}>
        <h1>{props.header}</h1>
        <p className={classes.num}>({props.link_cards.length})</p>
      </div>
      <Search placeholder={props.placeholder} onClick={() => {}} />
      <hr className={classes.divider} />
      <div className={classes.link_cards}>
        {props.link_cards.map((card) => func(card))}
      </div>
    </section>
  );
}
