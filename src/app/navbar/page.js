"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LOGO from '@/assets/logo.png';
import "@/app/styles/navbar.css";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 300) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={"transition-all duration-300 w-full h-24"}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <Image src={LOGO} alt="Logo Hai" className="h-[40px] w-[150px] cursor-pointer" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4rem" }}>
          <span className="text-lg cursor-pointer">COURSES</span>
          <span className="text-lg cursor-pointer">ABOUT US</span>
          <span className="text-lg cursor-pointer">CONTACT</span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link href={"/signup"}>
            <button className="px-4 py-2 border-2 rounded-xl border-white bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300" > SIGN UP
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="px-4 py-2 border-2 rounded-xl border-white text-pink-500 font-semibold hover:border-pink-600 hover:text-pink-600 transition duration-300">LOGIN
            </button>
          </Link>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
