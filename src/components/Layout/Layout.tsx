import { Outlet } from 'react-router-dom';
import NavigationLink from 'types/navigationLink';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import classes from './Layout.module.scss';

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
      <main className={classes.main_part}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
