import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// import App from './App.jsx';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile';
// import Error from './pages/Error';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
  },
})

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     error: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }, {
//         path: '/login',
//         element: <Login />
//       }, {
//         path: '/signup',
//         element: <Signup />
//       }, {
//         path: '/me',
//         element: <Profile />
//       }, {
//         path: '/',
//         element: <Profile />
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router}> */}
        <CssBaseline />
        <App />
      {/* </RouterProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
)
