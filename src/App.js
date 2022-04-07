import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Profile, ProductList, Wishlist, Cart } from "pages";
import { Navbar, Footer, Login, Signup, ProtectedRoutes } from "components";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="App flex-col">
      <Routes>
        <Route path="/" element={<Navbar isHome={true} />} />
        <Route path="*" element={<Navbar isHome={false} />} />
      </Routes>

      <div className="mb-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
