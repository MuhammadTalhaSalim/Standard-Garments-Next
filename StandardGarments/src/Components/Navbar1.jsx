
import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Navbar1() {
  return (
    <nav className="nav-1 bg-slate-200 p-2 text-sm hidden md:block ">
      <ul className="flex justify-between items-center px-1">
        
        <div className="contact">
          <li className="flex items-center gap-1">
            <IoCall />
            <a href="tel:+923224044443">+92322-4044443</a>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineMail />
            <a href="mailto:m.hashimali@gmail.com">m.hashimali@gmail.com</a>
          </li>
        </div>

        <div className="social flex items-center gap-4 text-xl">
          <li className="p-1 border border-transparent rounded-4xl hover:bg-yellow-400 group transition">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-[#2a314b] group-hover:text-white transition text-2xl" />
            </a>
          </li>
          <li className="p-1 border border-transparent rounded-4xl hover:bg-yellow-400 group transition">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-[#2a314b] group-hover:text-white transition text-2xl" />
            </a>
          </li>
          <li className="p-1 border border-transparent rounded-4xl hover:bg-yellow-400 group transition">
            <a href="https://wa.me/923224044443" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="text-[#2a314b] group-hover:text-white transition text-2xl" />
            </a>
          </li>
        </div>

        <li className="flex items-center gap-1">
          <IoLocationSharp />
          <span>Amir Town, near The Trust School</span>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar1;
