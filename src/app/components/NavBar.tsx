"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "サービス概要", href: "#service" },
  { label: "我々の強み", href: "#strengths" },
  { label: "制作の流れ", href: "#flow" },
  { label: "料金プラン", href: "#pricing" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl font-extrabold text-blue-900 tracking-wide"
        >
          株式会社Festal
        </motion.div>
        <ul className="flex gap-6 text-gray-800 font-semibold text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-blue-700 transition-colors duration-150">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 