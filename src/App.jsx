import './App.css'
import Header from "./components/layout/Header.jsx";
import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import ShoppingList from "./context/shoppingList.jsx";
import SideBar from "./components/layout/sideBar.jsx";

function App() {


    return (<>
        <Header/>
        <ShoppingList>
            <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 w-[80%]
                mx-auto bg-white rounded-lg shadow-lg">
                <main className="flex-1 bg-gray-100 rounded-lg p-4">
                    <Main/>
                </main>

                <aside className="w-full lg:w-[200px] bg-gray-50 rounded-lg p-4">
                    <SideBar/>
                </aside>
            </div>
        </ShoppingList>
        <Footer/>


    </>)
}

export default App
