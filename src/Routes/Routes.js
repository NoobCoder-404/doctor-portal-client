import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import About from '../Pages/About/About';
import Appointment from '../Pages/Appointment/Appointment';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Review from '../Pages/Review/Review';

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
        path: '/reviews',
        element: <Review />
      },

      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);
