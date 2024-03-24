import { LinkCard } from 'types/linkCard';
import Search from './Search/Search';
import classes from './LinkCardsPage.module.scss';
import LinkCardExemplar from './LinkCardExemplar/LinkCardExemplar';
import Pagination from './Pagination/Pagination';

export default function LinkCardsPage(props: {
  header: string;
  total_cards: number;
  placeholder: string;
  link_cards: LinkCard[];
  loading: boolean;
  current_page_number: number;
  total_page_number: number;
  pagination_len: number;
  pagination_controller: (new_page_number: number) => void;
}) {
  const func = (link_card: LinkCard) => {
    return <LinkCardExemplar link_card={link_card}></LinkCardExemplar>;
  };
  return (
    <section className={classes.link_cards_container}>
      <div className={classes.header}>
        <h1>{props.header}</h1>
        <p className={classes.num}>({props.total_cards})</p>
      </div>
      <Search placeholder={props.placeholder} onClick={() => {}} />
      <hr className={classes.divider} />
      <div className={classes.link_cards}>
        {props.link_cards.map((card) => func(card))}
      </div>
      <hr className={classes.divider} />
      <Pagination
        current_page_number={props.current_page_number}
        total_page_number={props.total_page_number}
        pagination_len={props.pagination_len}
        pagination_controller={props.pagination_controller}
      />
    </section>
  );
}
