import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart, removeItem } from "../utilies/cartSlice"

const Cart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector((store) => store.cart.items)

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleRemove = (item) =>{
        dispatch(removeItem(item.card.info.id))
    }


    return (
        <div className="flex items-center">
            {cartItems.length === 0 && 
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="font-extrabold text-green-700 text-4xl mb-4">Grrr. Grrr. Grrr.</span><br/>
                    <span className="text-xl text-gray-700 mb-2">It's probably your stomach making noises.<br/><span className="font-bold text-black italic">Order Something!!?</span></span>
                </div>
            }
            
            {cartItems.length>0 && <div className="w-1/2 m-auto mt-12">
                <h1 className="font-bold text-black text-2xl text-center mb-4">Cart</h1>
                <div className="border px-2 py-1 rounded bg-[#375a1e] text-white transition-transform hover:scale-105 w-1/4 m-auto text-center items-end cursor-pointer">
                    <button  
                        onClick={handleClearCart}>Clear Cart</button>    
                </div>
                <ItemList items = {cartItems} onClickFun={handleRemove} string={"REMOVE"}/>
            </div>}
            
        </div>
    )
}

export default Cart