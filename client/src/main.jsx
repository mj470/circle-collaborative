import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your pages
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import CircleGroupsPage from './pages/CircleGroups';
import ProfilePage from './pages/Profile';
import ContactPage from './pages/Contact';
import AboutUsPage from './pages/AboutUs';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/Signup';
import GroupPage from './pages/Group';
import './main.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/circlegroups',
        element: <CircleGroupsPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      // {
      //   path: '/:username',
      //   element: <ProfilePage />,
      // },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/aboutus',
        element: <AboutUsPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/CircleGroups/:groupId',
        element: <GroupPage />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
