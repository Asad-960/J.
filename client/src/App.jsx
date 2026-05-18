import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import { TopNavbar, MainNavbar, SubNavbar, Footer } from "./components";

import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import BeautyAndFragrance from "./pages/fragrance/BeautyAndFragrance";
import Fragrances from "./pages/fragrance/Fragrances";
import Teens from "./pages/Teens";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";

function App() {
  const location = useLocation();

  const pathToType = {
    "/": "women",
    "/men": "men",
    "/beauty": "beauty",
    "/fragrances": "beauty",
    "/teens": "teens"
  };

  const type = pathToType[location.pathname];

  const isAdminRoute = location.pathname.startsWith("/adminpanel") || location.pathname === "/adminpanel" || location.pathname.startsWith("/login") || location.pathname === "/login";

  return (
    <div className="app-container">
      {!isAdminRoute && (
        <>
          <TopNavbar />
          <MainNavbar type={type} />
          <SubNavbar type={type} />
        </>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/beauty" element={<BeautyAndFragrance />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="*" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="adminpanel/*" element={<Admin />} />
        </Routes>
      </main>

      {!isAdminRoute && (
        <>
          <Footer />
          <Cart />
        </>
      )}
    </div>
  );
}

export default App;
