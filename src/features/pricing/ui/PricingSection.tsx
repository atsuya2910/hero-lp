"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <motion.section
      className="py-24 bg-white text-center" id="pricing"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6">料金プラン</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
        {/* Webサイトプラン */}
        <div className="flex-1 bg-blue-50 rounded-2xl shadow-xl p-8 flex flex-col items-center min-w-[260px]">
          <div className="text-lg font-bold text-blue-900 mb-2">Webサイト制作プラン</div>
          <div className="text-3xl font-extrabold text-gray-800 mb-2">--- 円</div>
          <div className="text-sm text-gray-500 mb-4">（税込・参考価格）</div>
          <ul className="text-gray-700 text-left text-sm mb-6 space-y-1">
            <li>・要件ヒアリング・構成設計</li>
            <li>・デザイン制作（オリジナル）</li>
            <li>・コーディング（レスポンシブ対応）</li>
            <li>・ページ数・仕様により変動</li>
          </ul>
          <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl shadow transition">無料見積もり</button>
        </div>
        {/* LPプラン */}
        <div className="flex-1 bg-blue-50 rounded-2xl shadow-xl p-8 flex flex-col items-center min-w-[260px]">
          <div className="text-lg font-bold text-blue-900 mb-2">LP制作プラン</div>
          <div className="text-3xl font-extrabold text-gray-800 mb-2">--- 円</div>
          <div className="text-sm text-gray-500 mb-4">（税込・参考価格）</div>
          <ul className="text-gray-700 text-left text-sm mb-6 space-y-1">
            <li>・要件ヒアリング・構成設計</li>
            <li>・デザイン制作（Tailwind CSS）</li>
            <li>・コーディング（レスポンシブ対応）</li>
            <li>・1ページ完結型</li>
          </ul>
          <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl shadow transition">無料見積もり</button>
        </div>
      </div>
    </motion.section>
  );
} 