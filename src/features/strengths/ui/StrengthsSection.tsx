"use client";

import { motion } from "framer-motion";

export default function StrengthsSection() {
  return (
    <section
      className="relative py-24 text-center bg-cover bg-center"
      id="strengths"
      style={{ backgroundImage: "url('/images/bg2.jpg')" }}
    >
      {/* 見出し */}
      <div className="flex justify-center mb-96">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#223488] bg-white/90 px-8 py-2 rounded-lg inline-block drop-shadow-md">
          我々の強み
        </h2>
      </div>
      {/* カード群 */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
        {/* ビジネス理解 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative p-8 flex flex-col items-center"
        >
          {/* グリッド背景 */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl -z-10" />
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-orange-400 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-4"
          >
            {/* 脳アイコン（心理） */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-2.5 0-4.5 2-4.5 4.5V9c0 1.5 1 2.5 2.5 2.5h.5v1.5a2.5 2.5 0 005 0V11.5h.5c1.5 0 2.5-1 2.5-2.5v-.5C16.5 6 14.5 4 12 4z" />
            </svg>
          </motion.div>
          <h3 className="text-lg md:text-xl font-bold text-[#223488] mb-2">ビジネス理解</h3>
          <p className="text-white text-sm md:text-base leading-relaxed text-shadow-md">
            コンサルで培ったマーケティングノウハウを活かし、お客様のビジネスの本質を深く理解します。
          </p>
        </motion.div>
        {/* スピード */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative p-8 flex flex-col items-center"
        >
          {/* グリッド背景 */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl -z-10" />
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-orange-400 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-4"
          >
            {/* ロケットアイコン */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37l-6.36-6.36a2 2 0 012.83-2.83l6.36 6.36a2 2 0 01-2.83 2.83z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.17 15.59l-2.12 2.12a1 1 0 01-1.41 0l-.71-.71a1 1 0 010-1.41l2.12-2.12" />
            </svg>
          </motion.div>
          <h3 className="text-lg md:text-xl font-bold text-[#223488] mb-2">スピード</h3>
          <p className="text-white text-sm md:text-base leading-relaxed text-shadow-md">
            AI生成による迅速なプロトタイプ制作と柔軟なリテイク対応で、開発期間を大幅に短縮します。
          </p>
        </motion.div>
        {/* コスト削減 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative p-8 flex flex-col items-center"
        >
          {/* グリッド背景 */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl -z-10" />
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="bg-orange-400 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-4"
          >
            {/* 手にお金アイコン */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V19.5A2.25 2.25 0 004.5 21.75h15a2.25 2.25 0 002.25-2.25v-6.75" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-3-3m3 3l3-3" />
            </svg>
          </motion.div>
          <h3 className="text-lg md:text-xl font-bold text-[#223488] mb-2">コスト削減</h3>
          <p className="text-white text-sm md:text-base leading-relaxed text-shadow-md">
            大規模な制作チームを固定で抱えず、AIツールと少数精鋭の体制で適正価格を実現します。
          </p>
        </motion.div>
      </div>
      {/* 背景のオーバーレイ（暗くしすぎない） */}
      {/* <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" /> */}
    </section>
  );
} 