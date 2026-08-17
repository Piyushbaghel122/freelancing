"use client";

import { Star, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { FaInstagram, FaFacebook, FaPinterest, FaXTwitter } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DarkMenu() {
   const { t } = useTranslation();
   const [isHovered, setIsHovered] = useState(false);
   const sectionRef = useRef<HTMLElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(sectionRef.current,
            { y: 50, opacity: 0 },
            {
               y: 0,
               opacity: 1,
               duration: 1,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
               }
            }
         );
      }, sectionRef);

      return () => ctx.revert();
   }, []);

   return (
      <section ref={sectionRef} className="w-full bg-gradient-to-b from-[#F0F2F6] via-[#E8ECEF] to-[#E3E8EC] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center border-t border-gray-200/60 transition-all duration-300">
         {/* Footer / Services / Legal / Secure Checkout Section matching screenshot exactly */}
         <div className="w-full max-w-7xl mx-auto mt-16 pt-12 border-t border-gray-300/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-left items-start">
            {/* Column 1: Swiggy One description */}
            <Link to="/swiggy-one-benefits" className="flex flex-col items-start pr-4 group cursor-pointer">
               <div className="w-12 h-10 rounded-lg bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#ff5200]">
                  <span className="font-serif font-bold text-gray-800 group-hover:text-[#ff5200] text-sm tracking-tighter transition-colors">{t("footer_one", "One")}</span>
               </div>
               <p
                  className="text-sm sm:text-base text-gray-700 group-hover:text-black leading-relaxed font-normal transition-colors"
                  style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}
               >
                  {t("footer_one_desc", "Unlock a world of zero delivery fees and exclusive benefits across food, groceries, and dining.")}
               </p>
            </Link>

            {/* Column 2: SERVICES */}
            <div className="flex flex-col items-start">
               <h3
                  className="font-bold text-[#141414] text-sm tracking-wider uppercase mb-4 sm:mb-6"
                  style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}
               >
                  {t("footer_services", "SERVICES")}
               </h3>
               <ul className="space-y-3">
                  <li>
                     <Link to="/food-delivery" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_service_1", "Food Delivery")}
                     </Link>
                  </li>
                  <li>
                     <Link to="/instamart" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_service_2", "Instamart")}
                     </Link>
                  </li>
                  <li>
                     <Link to="/dineout" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_service_3", "Dineout")}
                     </Link>
                  </li>
                  <li>
                     <Link to="/genie" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_service_4", "Genie")}
                     </Link>
                  </li>
               </ul>
            </div>

            {/* Column 3: LEGAL */}
            <div className="flex flex-col items-start">
               <h3
                  className="font-bold text-[#141414] text-sm tracking-wider uppercase mb-4 sm:mb-6"
                  style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}
               >
                  {t("footer_legal", "LEGAL")}
               </h3>
               <ul className="space-y-3">
                  <li>
                     <Link to="/terms-and-conditions" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_legal_1", "Terms & Conditions")}
                     </Link>
                  </li>
                  <li>
                     <Link to="/privacy-policy" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_legal_2", "Privacy Policy")}
                     </Link>
                  </li>
                  <li>
                     <Link to="/cookie-policy" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_legal_3", "Cookie Policy")}
                     </Link>
                  </li>
                  <li>
                     <Link to="/offer-terms" className="text-sm sm:text-base text-gray-700 hover:text-[#ff5200] transition-colors duration-200 block font-normal cursor-pointer" style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                        {t("footer_legal_4", "Offer Terms")}
                     </Link>
                  </li>
               </ul>
            </div>

            {/* Column 4: SECURE CHECKOUT */}
            <div className="flex flex-col items-start lg:items-end w-full">
               <Link to="/checkout" className="bg-[#DFE3EC] border border-[#D0D6E2] rounded-xl px-5 py-3.5 inline-flex items-center gap-3 shadow-sm hover:shadow transition-all duration-200 cursor-pointer group whitespace-nowrap">
                  <div className="p-1 rounded-full bg-white/40 group-hover:scale-110 transition-transform duration-200 shrink-0">
                     <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#b75204] fill-[#fce7d2] shrink-0" />
                  </div>
                  <div className="flex flex-col text-left whitespace-nowrap">
                     <span
                        className="font-bold text-[#141414] text-xs sm:text-sm tracking-wide leading-tight uppercase whitespace-nowrap"
                        style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}
                     >
                        {t("footer_secure", "SECURE")}
                     </span>
                     <span
                        className="font-bold text-[#141414] text-xs sm:text-sm tracking-wide leading-tight uppercase whitespace-nowrap"
                        style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}
                     >
                        {t("footer_checkout", "CHECKOUT")}
                     </span>
                  </div>
               </Link>
               <Link to="/help" className="mt-3 bg-[#DFE3EC] border border-[#D0D6E2] rounded-xl px-5 py-3.5 mt-20 border border-gray-300 inline-flex items-center gap-3 shadow-sm hover:shadow transition-all duration-200 cursor-pointer group whitespace-nowrap">
                  <div className="flex flex-col text-left whitespace-nowrap">
                     <span
                        className="font-bold text-[#141414] text-xs sm:text-sm tracking-wide leading-tight uppercase whitespace-nowrap"
                        style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}
                     >
                        HELP CARE
                     </span>
                  </div>
               </Link>
            </div>
            <div className="flex flex-col items-start lg:mt-0">
               <h3 
                  className="font-bold text-[#141414] text-sm tracking-wider uppercase mb-4 sm:mb-6" 
                  style={{ fontFamily: "'Georgia', 'Cambria', 'Times New Roman', serif" }}>
                  Social Links
               </h3>
               <div className="flex gap-6">
                  <a href="https://www.instagram.com/piyush.dev12/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#ff5200] transition-colors">
                     <FaInstagram size={24} />
                  </a>
                  <a href="https://www.pinterest.com/piyushbaghel909023/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#ff5200] transition-colors">
                     <FaPinterest size={24} />
                  </a>
                  <a href="https://x.com/PiyushKuma65485" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#ff5200] transition-colors">
                     <FaXTwitter size={24} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61590608137207&sk=about" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#ff5200] transition-colors">
                     <FaFacebook size={24} />
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}