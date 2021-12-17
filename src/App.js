import "./App.css";
import SideBar from "./components/sidebar/Sidebar-Component";
import HomePage from "./components/home/HomePage-Component";
import ProductPage from "./components/product/ProductPage-Component";
import AboutPage from "./components/about/AboutPage-Component";
import ContactPage from "./components/contact/ContactPage-Component";
import Footer from "./components/footer/Footer-Component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        customBurgerIcon={<img src="img/menu/hamburger-menu.svg" alt="menu" />}
        width={"50%"}
      />
      <div id="page-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
