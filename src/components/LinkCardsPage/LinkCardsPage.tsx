import { Link } from 'react-router-dom';
import { LinkCard } from 'types/linkCard';

export default function LinkCardsPage(props: { link_cards: LinkCard[] }) {
  const func = (link_card: LinkCard) => {
    return (
      <li>
        <Link to={`${link_card.id.toString()}`}>{link_card.name}</Link>
      </li>
    );
  };
  return <ul>{props.link_cards.map((card) => func(card))}</ul>;
}
