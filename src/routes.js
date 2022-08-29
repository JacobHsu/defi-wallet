import { Navigate, useRoutes } from 'react-router-dom';
import Layout from 'layouts/Layout';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
