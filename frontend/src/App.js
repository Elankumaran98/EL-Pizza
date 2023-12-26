import Navbar from "./components/Navbar.js";
import CartScreen from "./screens/CartScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="login" element={<LoginScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
