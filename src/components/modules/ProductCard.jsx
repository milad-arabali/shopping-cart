import React from "react";
import {useCart} from "../../context/cartContext.jsx";

const ProductCard = ({data}) => {
    const {id, category, description, image, price, title, rating} = data;
    const {state, dispatch} = useCart();

    const isInCart = state.items.some(item => item.id === id);

    const handleAddToCart = () => {
        dispatch({type: "ADD_TO_CART", payload: data});
    };

    const handleRemoveFromCart = () => {
        dispatch({type: "REMOVE_FROM_CART", payload: {id}});
    };

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-4 h-[400px] flex flex-col justify-between">
                <img className="w-full h-40 object-cover" src={image} alt={title}/>
                <div className="py-2 flex-grow">
                    <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">{description}</p>
                    <p className="text-xs text-gray-500">Category: {category}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-md font-bold text-blue-600">${price}</span>
                    {rating && (
                        <span className="text-yellow-500 text-sm">⭐ {rating.rate} ({rating.count})</span>
                    )}
                </div>
                {isInCart ? (
                    <button
                        onClick={handleRemoveFromCart}
                        className="mt-2 w-full bg-red-600 text-white py-1.5 rounded-lg hover:bg-red-700 transition text-sm"
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button
                        onClick={handleAddToCart}
                        className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
