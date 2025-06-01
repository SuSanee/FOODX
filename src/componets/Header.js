import { CART_URL } from "../utilies/constants";
import { Link } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import { RiHome2Fill} from "react-icons/ri";
import { RiShieldUserFill} from "react-icons/ri";
import useOnlineStatus from "../utilies/useOnlineStatus";

const logo = new URL('../img/Foodx.png', import.meta.url).href;




// const logo = require('../img/logo_final.png')

const Header = () => {
    console.log("Logo path: ", logo);

    const status = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {logo} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online status: { status ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to = "/" className="link-style">
                            <div className="header-box">
                                <RiHome2Fill />
                                {/* <RiHome2Line/> */}
                                Home
                            </div>
                        </Link>
                    </li>        
                    <li>
                        <Link to = "/about" className="link-style">
                            <div className="header-box">
                                {/* <HiGlobeAlt /> */}
                                <RiShieldUserFill />
                                {/* <RiShieldUserLine/> */}
                                About Us
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/contact" className="link-style">
                            <div className="header-box">
                                <MdContactSupport />
                                Contact Us
                            </div>
                        </Link>
                    </li>
                    <li><img className="cart" alt="img" src = {CART_URL}></img></li>
                </ul>
            </div>
        </div>
        
        
    )
}

export default Header;