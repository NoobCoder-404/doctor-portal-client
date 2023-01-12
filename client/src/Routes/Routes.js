import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout';
import Main from '../Layouts/Main';
import About from '../Pages/About/About';
import Appointment from '../Pages/Appointment/Appointment/Appointment';
import Contact from '../Pages/Contact/Contact';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SingUp from '../Pages/SignUp/SingUp';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/appointment',
        element: <Appointment />
      },
      {
        path: '/contact',
        element: <Contact />
      },

      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SingUp />
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
]);
