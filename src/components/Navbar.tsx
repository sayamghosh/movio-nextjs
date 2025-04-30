'use client';
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoBookmarkFill } from "react-icons/go";
import { MdAccountCircle } from 'react-icons/md';
import { FaCaretDown } from "react-icons/fa";

function Navbar({}: { className?: string }) {
    const [] = useState<string | null>(null);
    return (
        <div className="h-[90px] flex items-center gap-16 px-[82px]">
            <div id="logo">
                <h1 className="text-4xl font-bold font-serif">Movio</h1>
            </div>
            <div id="Menu" className="flex justify-between items-center w-full">
                <div>
                    <ul className="text-base flex gap-[30px] items-center font-normal">
                        <li>Movies</li>
                        <li>TV shows</li>
                        <li>Celebs</li>
                        <li>News & events</li>
                    </ul>
                </div>
                <div className="flex gap-[30px] items-center">
                    <button>
                        <FiSearch className="text-[28px]" />
                    </button>
                    <button className="flex items-center gap-1">
                        <GoBookmarkFill className="text-[28px]" />
                        <p className="text-base">Watchlist</p>
                    </button>
                    <button className="flex items-center gap-[3px]">
                        <MdAccountCircle className="text-[28px]" />
                        <FaCaretDown className="text-base" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
