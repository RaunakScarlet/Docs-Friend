import { useEffect, useState } from "react";

import "../App.css";

const Color = () => {
    const [currentColor, setCurrentColor] = useState("");

    const handleFont = async () => {
        let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [currentColor],
            func: (currentColor) => {
                let allElements = document.querySelectorAll("*");
                allElements.forEach(function (element) {
                    element.style.color = currentColor;
                });
            },
        });
    };

    useEffect(() => {
        handleFont(currentColor);
    }, [currentColor]);
    return (
        <div className="h-60 mt-8">
            <span className="text-white text-xl font-bold  border-b-2 ">
                Font Color
            </span>
            <div className="w-96 ">
                <button
                    className="w-24 h-12 m-3 border border-white bg-white"
                    value="#FFFFFF"
                    onClick={(e) => {
                        setCurrentColor(e.target.value);
                        handleFont();
                    }}
                ></button>
                <button
                    className="w-24 h-12 m-3 bg-black  border border-white"
                    value="#000000"
                    onClick={(e) => {
                        setCurrentColor(e.target.value);
                        handleFont();
                    }}
                ></button>
                <button
                    className="w-24 h-12 m-3 bg-[#A00C03]  border border-white"
                    value="#A00C03"
                    onClick={(e) => {
                        setCurrentColor(e.target.value);
                        handleFont();
                    }}
                >
                    
                </button>
                
            </div>
            <div className="flex p-3">
                <button className="w-28 h-12 m-3 bg-black   border border-white">
                    custom color
                </button>
                <input
                    type="color"
                    className="w-24 h-12 m-3"
                    onChange={(e) => {
                        setCurrentColor(e.currentTarget.value);
                        handleFont();
                    }}
                >
                    
                </input>
            </div>
        </div>
    );
};

export default Color;
