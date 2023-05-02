import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SeasonsPage from './pages/Seasons';
import SeasonsSpringPage, {
  loader as springLoader,
} from './pages/SeasonsSpring';
import SeasonsAutumnPage from './pages/SeasonsAutumn';
import SeasonsWinterPage from './pages/SeasonsWinter';
import SeasonsSummerPage from './pages/SeasonsSummer';
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
      ],
    },
  ]);
  return (
    // <createBrowserRouter>
    //   <Routes>
    //     <Route path='' element={<Header />}>
    //       <Route path='/' element={<Home />}></Route>
    //       <Route path='seasons' element={<SeasonsPage />} />
    //       <Route
    //         path='seasons/spring'
    //         element={<SeasonsSpringPage />}
    //         loader={springLoader}
    //       />
    //       <Route path='seasons/autumn' element={<SeasonsAutumnPage />} />
    //       <Route path='seasons/winter' element={<SeasonsWinterPage />} />
    //       {/* <Route path='seasons/summer' element={<SeasonsSummerPage />} /> */}
    //     </Route>
    //   </Routes>
    // </createBrowserRouter>

    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
