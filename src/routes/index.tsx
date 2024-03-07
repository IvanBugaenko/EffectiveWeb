import LinkCardsPage from 'components/LinkCardsPage/LinkCardsPage';
import { characters } from '../mock/characters';
import { comics } from '../mock/comics';
import Layout from 'components/Layout/Layout';
import RouteObject from 'react-router-dom';
import NoMatch from 'components/NoMatch/NoMatch';
import DetailsPage from 'components/DetailsPage/DetailsPage';
import AppStrings from 'res/strings';

const routes: RouteObject.RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'characters',
        element: (
          <LinkCardsPage
            header={AppStrings.characters_link}
            placeholder={AppStrings.characters_search_placeholder}
            link_cards={characters}
          />
        )
      },
      {
        path: 'characters/:id',
        element: <DetailsPage />
      },
      {
        path: 'comics',
        element: (
          <LinkCardsPage
            header={AppStrings.comics_link}
            placeholder={AppStrings.comics_search_placeholder}
            link_cards={comics}
          />
        )
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
