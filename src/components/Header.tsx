"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const categories = ["Home", "India", "World", "Business", "Technology", "Sports", "Entertainment"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">{currentDate}</span>
          <div className="flex gap-4 mx-auto sm:mx-0">
            <Link href="/hindi" className="hover:text-white">हिंदी</Link>
            <Link href="/english" className="hover:text-white text-white font-bold">English</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            TOKKO <span className="text-red-600">BHARAT</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search news..." 
              className="bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-red-500 outline-none w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={20} />
          </button>
        </div>
        
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {categories.map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/category/${item.toLowerCase()}`}
              className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-t-lg transition-colors whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-2">
          {categories.map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/category/${item.toLowerCase()}`} className="block py-2 px-4 hover:bg-gray-100 rounded">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}