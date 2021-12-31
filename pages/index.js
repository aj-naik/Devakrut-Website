import SideBar from "./components/sidebar/Sidebar-Component";
import NavBar from "./components/navbar/Navbar-Component";
import Footer from "./components/footer/Footer-Component";
import HomePage from "./home";
import { useMediaQuery } from "react-responsive";

export default function Home() {
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
        <HomePage />

      </div>
      <Footer />
    </>
  );
}
