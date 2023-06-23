import DefaultLayout from '@/layouts/DefaultLayout';
import HomeView from '@/views/home/HomeView';
import Base64ImageView from '@/views/encoders-decoders/Base64ImageView';
import Base64TextView from '@/views/encoders-decoders/Base64TextView';
import UuidView from '@/views/generators/UuidView';
import SqlScriptsView from '@/views/generators/SqlScriptsView';
import BcryptView from '@/views/generators/BcryptView';
import JavaToJsonView from '@/views/converters/JavaToJsonView';
import RegexTesterView from '@/views/text/RegexTesterView';

import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: '',
        element: <HomeView />
      },
      {
        path: 'encoders',
        children: [
          {
            path: 'base64-text',
            element: <Base64ImageView />
          },
          {
            path: 'base64-image',
            element: <Base64TextView />
          }
        ]
      },
      {
        path: 'generators',
        children: [
          {
            path: 'uuid',
            element: <UuidView />
          },
          {
            path: 'sql',
            element: <SqlScriptsView />
          },
          {
            path: 'bcrypt',
            element: <BcryptView />
          }
        ]
      },
      {
        path: 'converters',
        children: [
          {
            path: 'java-json',
            element: <JavaToJsonView />
          }
        ]
      },
      {
        path: 'text',
        children: [
          {
            path: 'regex-tester',
            element: <RegexTesterView />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to='/' replace />
      }
    ]
  }
]);

export default router;
