import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Shopping from "../pages/Shopping.jsx";
import DetailPage from "../pages/detailPage.jsx";
import Checkout from "../pages/Checkout.jsx";
import NotFindPage from "../pages/notFindPage.jsx";

function Main() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Navigate to="/shopping" replace/>}/>
                <Route path="/shopping" element={<Shopping/>}/>
                <Route path="/shopping/:id" element={<DetailPage/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<NotFindPage/>}/>
            </Routes>


        </>


    );
}

export default Main;
