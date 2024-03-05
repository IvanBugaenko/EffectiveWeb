import LinkCardsPage from 'components/LinkCardsPage/LinkCardsPage';
import { characters } from '../mock/characters';
import { comics } from '../mock/comics';
import Layout from 'components/Layout/Layout';
import RouteObject from 'react-router-dom';
import NoMatch from 'components/NoMatch/NoMatch';
import DetailsPage from 'components/DetailsPage/DetailsPage';

const routes: RouteObject.RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'characters',
        element: <LinkCardsPage link_cards={characters} />
      },
      {
        path: 'characters/:id',
        element: <DetailsPage />
      },
      {
        path: 'comics',
        element: <LinkCardsPage link_cards={comics} />
      },
      {
        path: 'comics/:id',
        element: <DetailsPage />
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
];

export default routes;
