'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '../constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
             <Image 
             src="/logo.png" 
             alt="Logo" 
             width={40} 
             height={40}/>
          </div>
          <span className="text-nav-logo text-[#131927] hidden lg:block">
            Pearlaw Corporate
          </span>
        </Link>

        
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="text-nav-link text-[#131927]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center gap-4">
          
          <Link 
            href="/contact-page" 
            className="bg-[#C84E26] text-[#F5F5F5] py-[13px] px-[18px] rounded text-btn-small"
          >
            Get in Touch
          </Link>

          
          <button 
            type="button"
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#D97757] focus-visible:ring-2 focus-visible:ring-[#D97757] focus:outline-none rounded-md"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 font-medium hover:text-[#D97757] block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
