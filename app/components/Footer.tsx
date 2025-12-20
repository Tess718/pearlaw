import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Phone, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      className="text-white pt-[60px] pb-[40px] md:py-[120px] bg-[linear-gradient(136.05deg,#1E223F_-7.57%,#131927_166.74%)]"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:mb-[160px] mb-[60px]">
          
          {/* Company Info & Contact - Combined for Mobile Visual Flow */}
          <div className="flex flex-col gap-8 md:block">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <Image src="/footerlogo.png" alt="" width={50} height={50} />
              <span className="font-semibold text-[20px] leading-[24px] tracking-[0%] hidden md:inline">Pearlaw Corporate</span>
            </div>

            {/* Desktop Description - Hidden on Mobile if not in image */}
            <p className="font-medium text-[16px] leading-[24px] tracking-[0%] hidden md:block">
              Protecting your right with clarity, confidence, and experience.
            </p>
            
            {/* Social Media Icons - Desktop Location */}
            <div className="hidden md:flex gap-3 mt-8">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Facebook size={16} className='text-[#C84E26]' />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Instagram size={16} className='text-[#C84E26]' />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <i className="bi bi-tiktok text-transparent" style={{ WebkitTextStroke: '1px #C84E26' }}></i>
              </Link>
            </div>

            {/* Contact Info - Mobile Visual Order matches Image */}
            <div className="md:hidden space-y-4">
               <div className="flex items-center gap-3">
                <i className="bi bi-whatsapp text-[#C84E26]"></i>
                <span className="text-gray-300 text-sm">+234 806 430 5645</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C84E26]" />
                <span className="text-gray-300 text-sm">+234 813 614 1666</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C84E26]" />
                <span className="text-gray-300 text-sm">contact@pearlawcorporate.com</span>
              </div>
            </div>
          </div>

          {/* Contact Info - Desktop Only Block (since mobile moved it up) */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="bi bi-whatsapp text-[#C84E26]"></i>
                <span className="text-gray-300 text-sm">+234 806 430 5645</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C84E26]" />
                <span className="text-gray-300 text-sm">+234 813 614 1666</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C84E26]" />
                <span className="text-gray-300 text-sm">contact@pearlawcorporate.com</span>
              </div>
            </div>
          </div>

          {/* Practice Areas - Hidden on Mobile based on image */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Corporate & Securities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Tech Law
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Estate Law
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Startups & MSME Law
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Company Governance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Regulatory Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-300 text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/retainership-plans" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Retainership
                </Link>
              </li>
              <li>
                <Link href="/careers-page" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

           {/* Stay Updated - Mobile Only (or added to grid) */}
           <div className="md:hidden">
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-[14px] leading-[24px] mb-6">
                Subscribe to our newsletter for legal insights, industry updates, and firm news.
            </p>
            <div className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="flex-1 bg-white/10 border border-white/10 rounded-[4px] px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#C84E26]"
                />
                <button className="bg-[#C84E26] text-white px-6 py-3 rounded-[4px] font-medium text-sm">
                    Subscribe
                </button>
            </div>
          </div>

        </div>

        {/* Copyright & Socials (Mobile) */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">
          <p className="text-center text-gray-400 text-sm order-1 md:order-1">
            2025 Pearlaw Corporate. All rights reserved.
          </p>
          
          {/* Mobile Socials */}
          <div className="flex gap-3 md:hidden order-2">
            <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Facebook size={16} className='text-white' />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Instagram size={16} className='text-white' />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <i className="bi bi-tiktok text-transparent" style={{ WebkitTextStroke: '1px white' }}></i>
              </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
