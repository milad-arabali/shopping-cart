import './App.css'
import Header from "./components/layout/Header.jsx";
import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import ShoppingList from "./context/shoppingList.jsx";
import SideBar from "./components/layout/sideBar.jsx";
import {useState} from "react";
import {CartProvider} from "./context/cartContext.jsx";
import {useLocation} from "react-router-dom";

function App() {
    const [searchCategory, setSearchCategory] = useState("");
    const location = useLocation();
    const isCheckoutPage = location.pathname === "/checkout";
    const isDetailPage = location.pathname.startsWith("/shopping/");

    return (
        <>
            <CartProvider>
                <Header />
                <ShoppingList>
                    <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 w-[80%] mx-auto bg-white rounded-lg shadow-lg">
                        <main className="flex-1 bg-gray-100 rounded-lg p-4">
                            <Main isCheckoutPage={isCheckoutPage} searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
                        </main>

                        {!isCheckoutPage && !isDetailPage && (
                            <aside className="w-full lg:w-[200px] bg-gray-50 rounded-lg p-4">
                                <SideBar setSearchCategory={setSearchCategory} />
                            </aside>
                        )}
                    </div>
                </ShoppingList>
                <Footer />
            </CartProvider>
        </>
    );
}

export default App
