import { Navigate, useRoutes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Home from 'pages/Home';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
