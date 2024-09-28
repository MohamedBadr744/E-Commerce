
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import Register from '../Register/Register.jsx'
import Login from '../Login/Login.jsx'
function Layout() {

  return (
    <div>

      <Navbar />
      <div className='max-w-screen-xl container mx-auto p-3 pt-5 '>
        < Outlet />


        <Footer />
      </div>

    </div>
  );
}

export default Layout;