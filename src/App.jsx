import './App.css'
import Header from "./components/layout/Header.jsx";
import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import ShoppingList from "./context/shoppingList.jsx";

function App() {


    return (
        <>

            <Header/>
            <ShoppingList>
                <Main/>
            </ShoppingList>
            <Footer/>

        </>
    )
}

export default App
