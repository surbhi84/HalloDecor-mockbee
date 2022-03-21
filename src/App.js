import { Routes, Route } from "react-router-dom";
import { Home, ProductList } from "./pages";
import { Navbar, Footer } from "./components";
import Mockman from "mockman-js";
import "./css/common.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        {/*the below route is for testing purposes */}
        <Route path="/ts" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
