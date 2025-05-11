import { CART_URL } from "../utilies/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {`${process.env.PUBLIC_URL}/img/logo_final.png`} alt="logo" style={{ width: '100px', height: '50px' }}></img>
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