import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useProductList} from "../../context/shoppingList.jsx";

function DetailPage() {
    const {id} = useParams();
    const {products} = useProductList();

    const product = products.find(item => item.id.toString() === id);

    if (!product) {
        return (
            <div className="p-8 text-center text-red-600 text-lg">
                Product not found.
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain mb-6"
            />
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
            <p className="text-xl text-blue-600 font-bold mb-4">${product.price}</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                <Link
                    to="/shopping"
                    className="text-white hover:underline" // استفاده از متن سفید برای لینک داخل دکمه
                >
                    Go to shopping
                </Link>
            </button>
        </div>
    );
}

export default DetailPage;
