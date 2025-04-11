import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
    items: [],
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case "CLEAR_CART":
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
}

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
