import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SeasonsPage from './pages/Seasons';
import SeasonsSpringPage, {
  loader as springLoader,
} from './pages/SeasonsSpring';
import SeasonsAutumnPage, {
  loader as autumnLoader,
} from './pages/SeasonsAutumn';
import SeasonsWinterPage, {
  loader as winterLoader,
} from './pages/SeasonsWinter';
import SeasonsSummerPage, {
  loader as summerLoader,
} from './pages/SeasonsSummer';
import Header from './components/Layout/Header';
function App() {
  // return <RouterProvider router={router} />;

  const router = createBrowserRouter([
    {
      path: '',
      element: <Header />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'seasons', element: <SeasonsPage /> },
        {
          path: 'seasons/spring',
          element: <SeasonsSpringPage />,
          loader: springLoader,
        },
        {
          path: 'seasons/autumn',
          element: <SeasonsAutumnPage />,
          loader: autumnLoader,
        },
        {
          path: 'seasons/summer',
          element: <SeasonsSummerPage />,
          loader: summerLoader,
        },
        {
          path: 'seasons/winter',
          element: <SeasonsWinterPage />,
          loader: winterLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
