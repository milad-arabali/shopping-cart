import React, {createContext, useContext, useEffect, useState} from 'react';
import api from "../services/config.js";


export const ProductContext = createContext({products: []});

function ShoppingList({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await api.get("products");
                setProducts(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchList();
    }, []);
    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    );
}

const useProductList = () => {
    return useContext(ProductContext);
};
export default ShoppingList;
export {useProductList};
