import "./App.css";
import SideBar from "./components/sidebar/Sidebar-Component";
import HomePage from "./components/home/HomePage-Component";
import Footer from "./components/footer/Footer-Component";


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
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
