'use client';
import Image from 'next/image';
import React from 'react';
import instagram from '@/assets/instagram.png';
import mail from '@/assets/mail.png';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t w-full py-10 text-black">
      <div className="layout-container flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="logo-wrapper">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </div>

        {/* Right: Combined Follow + Contact in one line */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex flex-row gap-8 items-center">
            {/* Follow Us Section */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold">Follow us!</h3>
              <div className="flex items-center gap-2">
                <Image src={instagram} alt="Instagram" width={24} height={24} />
                <a
                  href="https://www.instagram.com/uwinmocktrial/"
                  target="_blank"
                  className="border-b-[1px] border-black pb-[1px] hover:text-blue-700"
                >
                  @uwinmocktrial
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold">Questions? Concerns?</h3>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <Image src={mail} alt="Mail" width={16} height={16} />
                </div>

                <a
                  href="mailto:umta@uwindsor.ca"
                  className="border-b-[1px] border-black pb-[1px] hover:text-blue-700"
                >
                  umta@uwindsor.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
