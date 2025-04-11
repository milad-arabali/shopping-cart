import React, {useState} from 'react';

function Search({setSearchText}) {
    const [inputValue, setInputValue] = useState("");
    const handleSearch = () => {
        setSearchText(inputValue);

    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() === "") {
            setSearchText("");
        }
    };

    return (
        <div className="relative flex flex-col sm:w-[300px] md:w-[400px] gap-2 p-2 rounded-lg text-white">
            <div className="flex items-center gap-2">
                <input
                    onChange={handleInputChange}
                    value={inputValue}
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
