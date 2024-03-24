import { Outlet } from 'react-router-dom';
import NavigationLink from 'types/navigationLink';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
