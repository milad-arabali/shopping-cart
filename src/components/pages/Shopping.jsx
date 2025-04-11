import React, {useEffect, useState} from 'react';
import {useProductList} from "../../context/shoppingList.jsx";
import ProductCard from "../modules/ProductCard.jsx";
import {CirclesWithBar} from "react-loader-spinner";
import Search from "../modules/search.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";

function Shopping({searchCategory}) {
    const {products} = useProductList();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState(searchCategory);
    const navigate = useNavigate();
    console.log("dd",products);
    const filteredProducts = products.filter(product => {
        const matchCategory =
            !category || category === "" || category === "all"
                ? true
                : product.category.toLowerCase().includes(category);
        const matchSearch =
            !searchText || product.title.toLowerCase().includes(searchText.toLowerCase());

        return matchCategory && matchSearch;
    });

    const handleSearchChange = (text) => {
        setSearchText(text);

        const params = {};
        if (text) params.search = text;
        if (category && category !== "all") params.category = category;

        setSearchParams(params);
    };
    useEffect(() => {
        setSearchParams({});
    }, []);

    useEffect(() => {
        if (searchCategory !== category) {
            setCategory(searchCategory);

            const params = {};
            if (searchText) params.search = searchText;
            if (searchCategory && searchCategory !== "all") params.category = searchCategory;

            setSearchParams(params);
        }
    }, [searchCategory]);

    return (
        <div className="flex flex-col mx-auto h-[629px]">
            <Search searchText={searchText} setSearchText={handleSearchChange}/>

            <div className="flex-1 overflow-y-auto">
                {filteredProducts.length === 0 ? (
                    <div className="flex justify-center items-start w-full h-full">
                        <div className="mt-20">
                            <CirclesWithBar
                                height="100"
                                width="100"
                                color="#4fa94d"
                                outerCircleColor="#4fa94d"
                                innerCircleColor="#4fa94d"
                                barColor="#4fa94d"
                                ariaLabel="circles-with-bar-loading"
                                visible={true}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center flex-wrap w-full">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} data={product}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shopping;
