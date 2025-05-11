import { CART_URL } from "../utilies/constants";
// import logo from '../img/FooDY.jpg'

const logo = new URL('../img/Foodx.png', import.meta.url).href;


// const logo = require('../img/logo_final.png')

const Header = () => {
    console.log("Logo path: ", logo);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {logo} alt="logo"></img>
                {/* <div className="logo">FOODX</div> */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li><img className="cart" alt="img" src = {CART_URL}></img></li>
                </ul>
            </div>
        </div>
        
        
    )
}

export default Header;