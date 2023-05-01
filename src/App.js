import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SeasonsPage from './pages/Seasons';
import ErrorPage from './pages/Error';
import SeasonsSpringPage from './pages/SeasonsSpring';
import SeasonsAutumnPage from './pages/SeasonsAutumn';
import SeasonsWinterPage from './pages/SeasonsWinter';
import SeasonsSummerPage from './pages/SeasonsSummer';
import Header from './components/Layout/Header';

// const router = createBrowserRouter([
//   {
//     path: '',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'seasons',
//         element: <SeasonsPage />,
//         children: [{ path: 'spring', element: <SeasonsSpringPage /> }],
//       },
//     ],
//   },
// ]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Header />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='seasons' element={<SeasonsPage />} />
          <Route path='seasons/spring' element={<SeasonsSpringPage />} />
          <Route path='seasons/autumn' element={<SeasonsAutumnPage />} />
          <Route path='seasons/winter' element={<SeasonsWinterPage />} />
          <Route path='seasons/summer' element={<SeasonsSummerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
