import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./global/Layout";
import Dashboard from "./Pages/Dashboard";
import Product from "./Pages/Product";
import Customer from "./Pages/Customer";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TrackOrder from "./Components/Product/TrackOrder";


function App() {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="customer" element={<Customer />} />
            <Route path="order-product" element={<TrackOrder />} />
            <Route path="shop" element={<Shop />} />
          </Route>
          <Route path="login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
