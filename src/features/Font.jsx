import { useEffect, useState } from "react";



import '../App.css'

const Font = () => {
    const [currentText, setCurrentText] = useState("");
    const handleFont = async () => {
        let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [currentText],
            func: (currentText) => {
                let allElements = document.querySelectorAll("*");
                allElements.forEach(function (element) {
                    element.style.fontFamily = currentText;
                });
            },
        });
    };

    useEffect(() => {
        handleFont(currentText);
    }, [currentText]);
    return (
        <div className="h-60">
            <div className="w-96 ">
                <button
                    className="w-24 h-12 m-3 bg-black   border border-white"
                    value="Arial, sans-serif"
                    onClick={(e) => {
                        setCurrentText(e.target.value);
                        handleFont();
                    }}
                >
                    Arial
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black  border border-white"
                    value="Didot, serif"
                    onClick={(e) => {
                        setCurrentText(e.target.value);
                        handleFont();
                    }}
                >
                    Didot
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black  border border-white"
                    value="courier, monospace"
                    onClick={(e) => {
                        setCurrentText(e.target.value);
                        handleFont();
                    }}
                >
                    Courier
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black   border-white"
                    value="Snell Roundhand, cursive"
                    onClick={(e) => {
                        setCurrentText(e.target.value);
                        handleFont();
                    }}
                >
                    Snell
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black   border-white"
                    value="Luminari, fantasy"
                    onClick={(e) => {
                        setCurrentText(e.target.value);
                        handleFont();
                    }}
                >
                    Luminari
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black   border-white"
                    value="Jazz LET, fantasy"
                    onClick={(e) => {
                        setCurrentText(e.target.value);
                        handleFont();
                    }}
                >
                    Jazz
                </button>
            </div>
            <div className="flex p-3">
                <button className="flex text-xs w-24 h-12 m-3 cursor-default ">
                    custom font
                    
                </button>
               
            </div>
        </div>
    );
};

export default Font;
