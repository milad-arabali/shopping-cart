import {useCart} from "../../context/cartContext.jsx";
import {useNavigate} from "react-router-dom";


function Checkout() {
    const { state, dispatch } = useCart();
    const navigate = useNavigate();
    const cartItems = state.items;
    const totalAmount = state.total;

    if (cartItems.length === 0) {
        navigate('/shopping');
        return null;// تا چیزی رندر نشه بعد از navigate
    }

    const handleIncreaseQuantity = (id) => {
        const item = cartItems.find(i => i.id === id);
        if (item) {
            dispatch({ type: 'ADD_TO_CART', payload: item });
        }
    };

    const handleDecreaseQuantity = (id) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
    };

    return (
        <div className="flex min-h-screen bg-gray-100 p-4">

            <div className="w-full lg:w-1/3 max-h-[300px] bg-white p-4 rounded-lg shadow-md overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-4">
                    <span className="text-lg font-semibold">Total Products</span>
                    <span className="text-lg">{cartItems.length}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className="text-lg font-semibold">Total Amount</span>
                    <span className="text-lg">${totalAmount.toFixed(2)}</span>
                </div>
                <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    disabled={cartItems.length === 0}
                >
                    Proceed to Payment
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1 ml-4">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleDecreaseQuantity(item.id)}
                                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                            >
                                -
                            </button>
                            <span className="text-lg">{item.quantity}</span>
                            <button
                                onClick={() => handleIncreaseQuantity(item.id)}
                                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                            >
                                +
                            </button>
                        </div>
                        <div className="ml-4 text-right">
                            <span className="font-bold text-lg">
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Checkout;
