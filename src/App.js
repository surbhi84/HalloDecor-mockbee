import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Profile, ProductList, Wishlist, Cart } from "./pages";
import { Navbar, Footer, Login, Signup } from "./components";
import Mockman from "mockman-js";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar isHome={true} />} />
        <Route path="*" element={<Navbar isHome={false} />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {/*the below route is for testing purposes */}
        <Route path="/ts" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
