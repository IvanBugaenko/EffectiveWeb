import { Outlet } from 'react-router-dom';
import NavigationLink from 'types/navigationLink';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout() {
  const pages: NavigationLink[] = [
    {
      text: 'Characters',
      link: '/characters'
    },
    {
      text: 'Comics',
      link: '/comics'
    }
  ];
  return (
    <>
      <Header buttons={pages} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
