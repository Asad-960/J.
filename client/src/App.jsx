import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import TopNavbar from "./components/common/navbar/TopNavbar";
import MainNavbar from "./components/common/navbar/MainNavbar";
import SubNavbar from "./components/common/navbar/SubNavbar";
import Footer from "./components/common/footer/Footer";

import Women from "./pages/Women";
import Men from "./pages/Men";
import Beauty from "./pages/FragranceBeauty";   
import Teens from "./pages/Teens";



function App() {
  const location = useLocation();

  const pathToType = {
    "/": "women",
    "/men": "men",
    "/beauty": "beauty",
    "/teens": "teens"
  };

  const type = pathToType[location.pathname];

  return (
    <div className="app-container">

      <TopNavbar />
      <MainNavbar type={type} />
      <SubNavbar type={type} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="*" element={<Women />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
