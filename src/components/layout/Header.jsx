import React from 'react';

function Header(props) {
    return (
        <div
            className="flex justify-between items-center w-[80%] mx-auto h-[80px] mb-10 mt-5 bg-blue-400 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-white px-6 py-2 text-center">
                Farazcode
            </h1>
            <h1 className="text-xl font-extrabold text-white px-6 py-2 text-center">
                shopping
            </h1>
        </div>
    );
}

export default Header;
