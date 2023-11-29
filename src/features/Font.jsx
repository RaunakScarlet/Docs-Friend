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
                <select
                    className="w-24 h-12 m-3"
                    onChange={(e) => {
                        setCurrentText(e.currentTarget.value);
                        handleFont();
                    }}
                >
                    <option value="">None</option>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="Helvetica, sans-serif">Helvetica</option>
                    <option value="Verdana, sans-serif">Verdana</option>
                    <option value="Trebuchet MS, sans-serif">
                        Trebuchet MS
                    </option>
                    <option value="Gill Sans, sans-serif">Gill Sans</option>
                    <option value="Noto Sans, sans-serif">Noto</option>
                    <option value="Optima, sans-serif">Optima</option>
                    <option value="Arial Narrow, sans-serif">Arial</option>
                    <option value="Times New Roman, serif">Times</option>
                    <option value="Didot, serif">Didot</option>
                    <option value="Georgia, serif">Georgia</option>
                    <option value="URW Palladio L, serif">Palladio</option>
                    <option value="American Typewriter, serif">American</option>
                    <option value="Andale Mono, monospace">Andale</option>
                    <option value="Courier New, monospace">Courier</option>
                    <option value="FreeMono, monospace">FreeMono</option>
                    <option value="DejaVu Sans Mono, monospace">DejaVu</option>
                    <option value="Comic Sans, cursive">Comic</option>
                    <option value="Apple Chancery, cursive">Apple</option>
                    <option value="Bradley Hand, cursive">Bradley</option>
                    <option value="Brush Script Std, cursive">Brush</option>
                    <option value="Impact, fantasy">Impact</option>
                    <option value="Luminari, fantasy">Luminari</option>
                    <option value="Chalkduster, fantasy">Chalkduster</option>
                    <option value="Blippo, fantasy">Blippo</option>
                    <option value="Marker Felt, fantasy">Marker</option>
                    <option value="Trattatello, fantasy">Trattatello</option>
                </select>
            </div>
        </div>
    );
};

export default Font;
