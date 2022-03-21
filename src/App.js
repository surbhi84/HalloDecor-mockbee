import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Profile } from "./pages";
import { Navbar, Footer, Login, Signup } from "./components";
import { createContext, useState, useContext } from "react";

import Mockman from "mockman-js";
import "./css/common.css";
const Context = createContext();
export const useCont = () => useContext(Context);

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="App">
      <Context.Provider value={{ isHome, setIsHome }}>
        <Routes>
          <Route path="/" element={<Navbar isHome={true} />} />
          <Route path="*" element={<Navbar isHome={false} />} />
        </Routes>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/ts"
            element={
              <div style={{ margin: "100px" }}>
                <Mockman />
              </div>
            }
          />
          {/*the above route is for testing purposes */}
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
