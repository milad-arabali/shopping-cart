import React from 'react';
import {useCart} from "../../context/cartContext.jsx";
import {FiShoppingCart} from "react-icons/fi";

function Header() {
    const {state} = useCart();
    const cartCount = state.items.length;

    return (
        <div
            className="flex justify-between items-center w-[80%] mx-auto h-[80px] mb-10 mt-5 bg-blue-400 rounded-lg shadow-lg px-6">
            <h1 className="text-4xl font-extrabold text-white">Farazcode</h1>

            <div className="flex items-center gap-4">
                <h1 className="text-xl font-extrabold text-white">Shopping</h1>

                <div className="relative">
                    <FiShoppingCart className="text-white text-3xl cursor-pointer"/>

                    {cartCount > 0 && (
                        <span
                            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md"
                        >
              {cartCount}
            </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
