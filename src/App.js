import './App.css';
import SideBar from './components/sidebar/Sidebar-component'

function App() {
  return ( <
    SideBar pageWrapId = {
      "page-wrap"
    }
    outerContainerId = {
      "App"
    }
    customBurgerIcon={ <img src="img/menu/hamburger-menu.svg" /> }
    width={ '50%' }
    />
    
  );
}

export default App;