import React from "react";
import "./Navbar.css";

 const Navbar = () => (
        <div>
            <header className='navbar'>
            <div className='navbar_logo'></div>
            <div className='navbar_item'>Product</div>
            <div className='navbar_item'>About</div>
            <div className='navbar_item'>Contact</div>
            <div className='navbar_item'>(+91) 9579611239</div>   
            <div className="navbar-social-media-logo">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/footer/instagram.svg" alt="Insta"></img>
            </a></div> 
            <div className="navbar-social-media-logo"><a
              className="smicon"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/footer/facebook.svg" alt="Fb"></img>
            </a>
                </div>
        </header>
            
        </div>
    );

export default Navbar;



