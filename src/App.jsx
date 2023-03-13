import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/pages/Sidebar";
import Dashboard from './components/pages/Dashboard';
import AddProduct from "./components/pages/AddProduct";
import ViewProduct from "./components/pages/ViewProduct"
import ViewOrders from './components/pages/ViewOrders'
import Login from "./components/pages/Login";
import axios from "axios";
import PrivateRoutes from "./components/authentication/Authentication";



export const axiosObject = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>} />

      <Route element={<PrivateRoutes/>}>

        <Route path="/" element={<Sidebar/>} >
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          
          <Route element={<PrivateRoutes roleRequired = "user"/>}>
          <Route path="/view-products" element={<ViewProduct />}/>
          </Route>

          <Route path="/view-orders" element={<ViewOrders />} />
        </Route>

        </Route>
      </Routes>
    </Router>
  );
}



export default App;