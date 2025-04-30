import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

export default function Card() {
  return (
    <div className="w-[193px] pb-4 bg-[#1B1B1B] rounded-[10px]">
      <div
        id="poster"
        className="bg-[url('https://imgshare.info/images/2025/04/18/xUkUZ8eOnrOnnJAfusZUqKYZiDu-1.jpg')] bg-cover bg-center h-[280px] w-full rounded-t-[10px]"
      >
        <span className="w-full flex gap-2 p-2">
          <CiBookmarkPlus className="text-white text-[30px] hover:text-[#BCBCBC] cursor-pointer" />
        </span>
      </div>
      <div id="content" className="w-[179px] m-2 flex flex-col gap-4 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-[#F0F8FF] text-[16px] font-bold leading-tight">
            A Working Man
          </h1>
          <IoMdInformationCircleOutline className="text-[#F0F8FF] text-[20px] hover:text-[#BCBCBC] cursor-pointer" />
        </div>
        <div className="text-[#BCBCBC] font-[500px]">
          <p>Action / Thriller</p>  
        </div>
        <div className="flex items-center gap-0.5">
          <FaStar className="text-amber-400" />
          <p className="font-[#BCBCBC]">5.8</p>
        </div>
        <button className="flex items-center gap-1 bg-[#282828] px-4 py-2 rounded-[10px] justify-center text-[#1C9CFF] mx-auto hover:bg-[#FFFFFF14] cursor-pointer" >
          <FaPlay className="text-sm" />
          <p>Watch trailer</p>
        </button>
      </div>
    </div>
  );
}
