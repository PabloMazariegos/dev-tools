import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/views/home/Home';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: '',
        element: <Home />
      },
      {
        path: 'encoders',
        children: [
          {
            path: 'base64-text',
            element: <h1>BASE64 TEXT</h1>
          },
          {
            path: 'base64-image',
            element: <h1>BASE64 IMAGE</h1>
          }
        ]
      },
      {
        path: 'generators',
        children: [
          {
            path: 'uuid',
            element: <h1>UUID</h1>
          },
          {
            path: 'sql',
            element: <h1>SQL</h1>
          },
          {
            path: 'bcrypt',
            element: <h1>BCRYPT</h1>
          }
        ]
      },
      {
        path: 'converters',
        children: [
          {
            path: 'java-json',
            element: <h1>UUID</h1>
          }
        ]
      },
      {
        path: 'text',
        children: [
          {
            path: 'regex-tester',
            element: <h1>UUID</h1>
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]);

export default router;
