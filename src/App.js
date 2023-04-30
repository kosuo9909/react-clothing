import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SeasonsPageComponent from './components/UI/seasonal-grid/SeasonsPageComponent';
import Home from './pages/Home';
import SeasonsPage from './pages/Seasons';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/seasons',
    element: <SeasonsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
