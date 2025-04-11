import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
    items: [],
    total: 0,
    itemCounter: {},
    checkout: false,
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            let updatedItems;
            let updatedItemCounter = {...state.itemCounter};
            let updatedTotal = state.total;

            if (existingItemIndex !== -1) {
                updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex ? {...item, quantity: item.quantity + 1} : item
                );
                updatedItemCounter[action.payload.id] += 1;
                updatedTotal += action.payload.price;
            } else {

                updatedItems = [...state.items, {...action.payload, quantity: 1}];
                updatedItemCounter[action.payload.id] = 1;
                updatedTotal += action.payload.price;
            }

            return {
                ...state,
                items: updatedItems,
                itemCounter: updatedItemCounter,
                total: updatedTotal,
                checkout: true,
            };

        case "REMOVE_FROM_CART":
            const itemToRemoveIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemToRemoveIndex === -1) return state;

            const itemToRemove = state.items[itemToRemoveIndex];
            const newItems = state.items.filter(item => item.id !== action.payload.id);
            const newItemCounter = {...state.itemCounter};
            newItemCounter[action.payload.id] -= itemToRemove.quantity;
            if (newItemCounter[action.payload.id] <= 0) {
                delete newItemCounter[action.payload.id];
            }
            const newTotal = state.total - itemToRemove.price * itemToRemove.quantity;

            return {
                ...state,
                items: newItems,
                itemCounter: newItemCounter,
                total: newTotal,
                checkout: newItems.length > 0,
            };

        case "DECREASE_QUANTITY":
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) return state;

            const item = state.items[itemIndex];

            if (item.quantity === 1) {

                const filteredItems = state.items.filter((_, index) => index !== itemIndex);
                const reducedCounter = {...state.itemCounter};
                delete reducedCounter[action.payload.id];
                const newTotal = state.total - item.price;

                return {
                    ...state,
                    items: filteredItems,
                    itemCounter: reducedCounter,
                    total: newTotal,
                    checkout: filteredItems.length > 0,
                };
            }

            const decreasedItems = state.items.map((item, index) =>
                index === itemIndex ? {...item, quantity: item.quantity - 1} : item
            );
            const decreasedItemCounter = {...state.itemCounter};
            decreasedItemCounter[action.payload.id] -= 1;
            const decreasedTotal = state.total - item.price;

            return {
                ...state,
                items: decreasedItems,
                itemCounter: decreasedItemCounter,
                total: decreasedTotal,
            };

        case "CLEAR_CART":
            return {
                ...state,
                items: [],
                itemCounter: {},
                total: 0,
                checkout: false,
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
