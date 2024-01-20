import Navbar from "./components/Navbar.js";
import CartScreen from "./screens/CartScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import OrdersScreen from "./screens/OrdersScreen.js";
import AdminScreen from "./screens/AdminScreen.js";
import Contact from "./screens/Contact.js";
import ProfileScreen from "./screens/ProfileScreen.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/admin/*" element={<AdminScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={ <ProfileScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
