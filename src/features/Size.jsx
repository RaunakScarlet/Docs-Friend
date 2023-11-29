import { useEffect, useState } from "react";

import "../App.css";

const Size = () => {
    const [currentSize, setCurrentSize] = useState("");

    const handleFont = async () => {
        let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [currentSize],
            func: (currentSize) => {
                let allElements = document.querySelectorAll("*");
                allElements.forEach(function (element) {
                    element.style.fontSize = currentSize;
                });
            },
        });
    };

    useEffect(() => {
        handleFont(currentSize);
    }, [currentSize]);
    return (
        <div className="h-60 mt-8">
            <span className="text-white text-xl font-bold  border-b-2 ">
                Font Size
            </span>
            <div className="w-96 ">
                <button
                    className="w-24 h-12 m-3 bg-black   border border-white"
                    value="8px"
                    onClick={(e) => {
                        setCurrentSize(e.target.value);
                        handleFont();
                    }}
                >
                    8px
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black  border border-white"
                    value="10px"
                    onClick={(e) => {
                        setCurrentSize(e.target.value);
                        handleFont();
                    }}
                >
                    10px
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black  border border-white"
                    value="12px"
                    onClick={(e) => {
                        setCurrentSize(e.target.value);
                        handleFont();
                    }}
                >
                    12px
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black   border-white"
                    value="14px"
                    onClick={(e) => {
                        setCurrentSize(e.target.value);
                        handleFont();
                    }}
                >
                    14px
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black   border-white"
                    value="16px"
                    onClick={(e) => {
                        setCurrentSize(e.target.value);
                        handleFont();
                    }}
                >
                    16px
                </button>
                <button
                    className="w-24 h-12 m-3 bg-black   border-white"
                    value="32px"
                    onClick={(e) => {
                        setCurrentSize(e.target.value);
                        handleFont();
                    }}
                >
                    32px
                </button>
            </div>
            <div className="flex p-3">
                <button className="w-28 h-12 m-3 bg-black   border border-white">
                    custom size
                </button>
                <select
                    className="w-24 h-12 m-3"
                    onChange={(e) => {
                        setCurrentSize(e.currentTarget.value);
                        handleFont();
                    }}
                >
                    <option value="">None</option>
                    <option value="1px">1px</option>
                    <option value="2px">2px</option>
                    <option value="4px">4px</option>
                    <option value="6px">6px</option>
                    <option value="8px">8px</option>
                    <option value="10px">10px</option>
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>

                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                    <option value="22px">22px</option>
                    <option value="24px">24px</option>
                    <option value="26px">26px</option>
                    <option value="28px">28px</option>
                    <option value="30px">30px</option>
                    <option value="32px">32px</option>
                    <option value="34px">34px</option>
                    <option value="36px">36px</option>
                    <option value="38px">38px</option>
                    <option value="40px">40px</option>
                    <option value="42px">42px</option>
                    <option value="44px">44px</option>
                    <option value="46px">46px</option>
                    <option value="48px">48px</option>
                    <option value="50px">50px</option>
                </select>
            </div>
        </div>
    );
};

export default Size;
