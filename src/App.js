import "./App.css";
import SideBar from "./components/sidebar/Sidebar-Component";
import NavBar from "./components/navbar/Navbar-Component";
import HomePage from "./components/home/HomePage-Component";
import AboutPage from "./components/about/AboutPage-Component";
import ProductPage from "./components/product/ProductPage-Component";
import ContactPage from "./components/contact/ContactPage-Component";
import Footer from "./components/footer/Footer-Component";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <div id="page-wrap">
        {isDesktopOrLaptop && <NavBar />}
        {!isDesktopOrLaptop && (
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
            customBurgerIcon={
              <img src="img/menu/hamburger-menu.svg" alt="menu" />
            }
            width={"50%"}
          />
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
