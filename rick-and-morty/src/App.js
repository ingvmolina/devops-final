import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './components/pages/root';
import CharactersPage from './components/pages/characters/CharactersPage';
import EpisodesPage from './components/pages/episodes';
import LocationsPage from './components/pages/locations/LocationsPage';
import Error from './components/pages/errors/404';

const getRandom = (max, length) => {
  //chars 826
  //episodes 52 (falta temporada 6)
  //locations 126
  //return Math.floor(Math.random() * (max) + 1);//
  return Array.from({length: length}, () => Math.floor(Math.random() * max +1));
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Error />,
    children: [
      {
        path: "characters/",
        element: <CharactersPage
                    ids={getRandom(826,20)}
                  />,
        errorElement: <Error />
      },
      {
        path: "characters/:id",
        element: <CharactersPage />,
        errorElement: <Error />
      },
      {
        path: "episodes/",
        element: <EpisodesPage
                    ids={getRandom(52,20)}
                  />,
        errorElement: <Error />
      },
      {
        path: "locations/",
        element: <LocationsPage
                    ids={getRandom(126,20)}
                  />,
        errorElement: <Error />
      },
      {
        path: "episodes/:id",
        element: <EpisodesPage />,
        errorElement: <Error />
      },
      {
        path: "locations/:id",
        element: <LocationsPage />,
        errorElement: <Error />
      }
    ],
  }
]);

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
