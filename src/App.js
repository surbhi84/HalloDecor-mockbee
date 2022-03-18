import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, Footer } from "./components";
import Mockman from "mockman-js";
import "./css/common.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
    </div>
  );
}

export default App;
