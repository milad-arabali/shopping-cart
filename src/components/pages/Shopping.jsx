import React from 'react';
import {useProductList} from "../../context/shoppingList.jsx";
import ProductCard from "../modules/ProductCard.jsx";
import {CirclesWithBar} from "react-loader-spinner";

function Shopping() {
    const {products} = useProductList();
    console.log(products, "tst")
    return (
        <div className="flex gap-1  mx-auto h-[629px]  sm:w-[80%]
             md:w-[70%] lg:w-[60%]  overflow-y-auto">
            {products.length === 0 && (
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
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
            )}

            {products.length > 0 && (
                <div className="flex justify-center flex-wrap gap-4 w-full">
                    {products.map(product => (
                        <ProductCard key={product.id} data={product}/>
                    ))}
                </div>
            )}
        </div>

    );
}

export default Shopping;
