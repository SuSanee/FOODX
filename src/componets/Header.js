import { Link } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import { RiHome2Fill} from "react-icons/ri";
import { RiShieldUserFill} from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import useOnlineStatus from "../utilies/useOnlineStatus";
import { useSelector } from "react-redux";

const logo = new URL('../img/Foodx.png', import.meta.url).href;

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const status = useOnlineStatus()
    return (
        <div className="flex  items-center justify-between shadow-md px-4">
            <div className="w-28">
                <img className="logo" src= {logo} alt="logo"></img>
            </div>
            <div className="flex">
                <ul className="flex items-center">
                    <li className="px-4 text-lg hover:font-semibold hover:text-[#34581a] hover:scale-105 transition-transform">
                        Online status: { status ? "🟢" : "🔴"}
                    </li>
                    <li  className="px-4 text-lg hover:font-semibold hover:text-[#34581a] hover:scale-105 transition-transform">
                        <Link to = "/" className="link-style">
                            <div className="flex items-center gap-1">
                                <RiHome2Fill />
                                Home
                            </div>
                        </Link>
                    </li>        
                    <li className="px-4 text-lg hover:font-semibold hover:text-[#34581a] hover:scale-105 transition-transform">
                        <Link to = "/about">
                            <div className="flex items-center gap-1">
                                <RiShieldUserFill />
                                About Us
                            </div>
                        </Link>
                    </li>
                    <li className="px-4 text-lg hover:font-semibold hover:text-[#34581a] hover:scale-105 transition-transform">
                        <Link to = "/contact" className="link-style">
                            <div className="flex items-center gap-1">
                                <MdContactSupport />
                                Contact Us
                            </div>
                        </Link>
                    </li>
                    <li className="px-4 text-lg hover:font-semibold hover:text-[#34581a] hover:scale-105 transition-transform">
                        <Link to = "/cart">
                            <div className="flex">
                                <FaCartShopping size={32}/>
                                {cartItems.length > 0 && <span className="text-green-700 font-bold text-base -mt-2">({cartItems.length})</span>}
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        
        
    )
}

export default Header;