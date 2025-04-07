import React from 'react';

function SideBar() {
    return (
        <div className="w-full   ">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
                <li className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    All
                </li>
                <li className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3"/>
                    </svg>
                    Electronics
                </li>
                <li className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-3.33 0-6 2.67-6 6h12c0-3.33-2.67-6-6-6z"/>
                    </svg>
                    Jewelery
                </li>
                <li className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    Men's Clothing
                </li>
                <li className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" stroke-width="1.5"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3"/>
                    </svg>
                    Women's Clothing
                </li>
            </ul>
        </div>

    );
}

export default SideBar;
