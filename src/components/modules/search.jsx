import React, {useState} from 'react';

function Search() {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {

        console.log("جستجو:", searchText);
        alert(`در حال جستجوی: ${searchText}`);
    };

    return (
        <div className="relative flex flex-col sm:w-[300px] md:w-[400px] gap-2 p-2 rounded-lg text-white">
            <div className="flex items-center gap-2">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    placeholder="Search Product..."
                    type="text"
                    className="p-1 text-gray-900 bg-white rounded-md border
                     border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none w-[300px]"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md
                     hover:bg-blue-600 transition duration-200"
                >search
                </button>
            </div>
        </div>
    );
}

export default Search;
