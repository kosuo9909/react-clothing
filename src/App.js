import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import ShopPage, { loader as autumnLoader } from './pages/Shop';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Register from './components/Account/Register';
import Login from './components/Account/Login';
import Footer from './components/Layout/Footer';
import OrdersPage from './pages/OrdersPage';
function App() {
  // return <RouterProvider router={router} />;

  const router = createBrowserRouter([
    {
      path: '',
      element: <Header footer={<Footer />} />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'cart', element: <Cart /> },

        {
          path: 'shop',
          element: <ShopPage />,
          loader: autumnLoader,
        },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'orders', element: <OrdersPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
