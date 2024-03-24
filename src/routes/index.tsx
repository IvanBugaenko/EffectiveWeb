import Layout from 'components/Layout/Layout';
import RouteObject from 'react-router-dom';
import NoMatch from 'components/NoMatch/NoMatch';
import {
  CharactersPage,
  ComicsPage,
  CharacterDetailsPage,
  ComicsDetailsPage
} from './Pages';

const limit: number = 12;
const paginationLen: number = 7;

const routes: RouteObject.RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'characters',
        element: <CharactersPage limit={limit} pagination_len={paginationLen} />
      },
      {
        path: 'characters/:id',
        element: <CharacterDetailsPage />
      },
      {
        path: 'comics',
        element: <ComicsPage limit={limit} pagination_len={paginationLen} />
      },
      {
        path: 'comics/:id',
        element: <ComicsDetailsPage />
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
];

export default routes;
