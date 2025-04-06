import React from 'react';

function Footer(props) {
    return (
        <div
            className="flex justify-center items-center w-[80%] mx-auto h-[80px] mb-10 mt-5 bg-blue-400 rounded-lg shadow-lg">
            <p className="text-sm text-white flex items-center">
                <a
                    href="https://farazcode.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5 text-white font-semibold hover:underline hover:text-blue-800 transition duration-300"
                >
                    farazcode.ir
                </a>
                <span>ساخته شده توسط</span>
            </p>
        </div>




    );
}

export default Footer;
