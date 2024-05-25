import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ProductDescription from './Pages/ProductDescription';
import Checkout from './Pages/Checkout';
import ProductComparision from './Pages/ProductComparision';
import User from './Pages/User';
import AxiosOtp from './Components/AxiosOtp';
import AxiosLogin from './Components/AxiosLogin';
import AxiosPost from './Components/AxiosPost';
import Login from './Pages/Login';
import BaseLayout from './layout/BaseLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Register';
import TrackOrder from './Pages/TrackOrder';


function App() {
  const user = JSON.parse(localStorage.getItem("user"))


  const data = [
    { path: '/',  element:<Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/cart', element: <Cart /> },
    { path: '/product', element: <ProductDescription /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/productcomparision', element: <ProductComparision /> },
    { path: '/user', element: <User /> },
    { path: '/otp', element: <AxiosOtp /> },
    { path: '/track-order', element: <TrackOrder /> },
  ]

  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route element={<BaseLayout/>}>
          {data.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
           
          </Route>
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/register"} element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App