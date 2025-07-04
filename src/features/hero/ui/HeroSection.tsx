"use client";

import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// features変数は現在未使用のため削除します。
// const features = [
//   { label: '最先端AIツール活用' },
//   { label: '短納期（最短5日）' },
//   { label: '適正価格（安価）' },
// ];

export default function HeroSection() {
  // パララックス用
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `translateY(${y * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 背景画像（hero-perfect-bg.svg） */}
      {/* <img> タグを Next.js の <Image /> コンポーネントに置き換え、LCP警告も解消 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/bg.jpg"
          alt="ヒーロー背景"
          className="w-full h-full object-cover"
          fill // 親要素いっぱいに広げる
          style={{ objectFit: 'cover' }} // CSSのobject-fit: cover; と同じ
          priority // ページのLCP要素として優先的に読み込む
        />
      </div>
      {/* メインコンテンツ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 pt-20 md:pt-28 pb-10 md:pb-16 gap-12 md:gap-0">
        {/* 左側：見出し・サブコピー・CTA */}
        <div className="flex-1 flex flex-col items-start justify-center gap-10 w-full max-w-2xl">
          {/* メインタイトル */}
          <div className="relative w-full mb-2 flex">
            <motion.h1
              className="relative z-10 font-semibold text-2xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight px-4 py-2 w-full text-center drop-shadow-md"
              style={{ fontFamily: 'Noto Sans JP, Montserrat, Inter, Arial, sans-serif', letterSpacing: '0.01em', lineHeight: 1.18, textShadow: '1px 1px 2px #0008' }}
              initial={{ opacity: 0, y: -32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              売上につながる<br />Web制作サービス
            </motion.h1>
          </div>
          {/* サブコピー */}
          <div className="relative w-full mb-1 flex">
            <motion.p
              className="relative z-10 text-base sm:text-xl font-bold text-white tracking-wide px-4 py-2 w-full text-center"
              style={{ fontFamily: 'Montserrat, Noto Sans JP, Inter, Arial, sans-serif', letterSpacing: '0.02em', lineHeight: 1.5, textShadow: '1px 1px 2px #0008' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              成果主義のサイトデザインで、ビジネスの成長を加速させます。
            </motion.p>
          </div>
          {/* CTAボタン（説明文の上に移動） */}
          <div className="relative w-full flex flex-col sm:flex-row gap-8 mt-8 mb-8 justify-center items-center">
            <motion.a
              href="#contact"
              className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white font-extrabold text-2xl px-16 py-7 rounded-3xl shadow-2xl border-none hover:from-blue-600 hover:to-cyan-500 hover:shadow-blue-300/60 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 w-full sm:w-auto"
              style={{ fontFamily: 'Montserrat, Noto Sans JP, Inter, Arial, sans-serif', letterSpacing: '0.04em' }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 400 }}
            >
              <ChatBubbleLeftRightIcon className="w-7 h-7 text-white drop-shadow" />
              無料相談
            </motion.a>
            <motion.a
              href="#contact"
              className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white font-extrabold text-2xl px-16 py-7 rounded-3xl shadow-2xl border-none hover:from-blue-600 hover:to-cyan-500 hover:shadow-blue-300/60 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 w-full sm:w-auto"
              style={{ fontFamily: 'Montserrat, Noto Sans JP, Inter, Arial, sans-serif', letterSpacing: '0.04em' }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 400 }}
            >
              <EnvelopeIcon className="w-7 h-7 text-white drop-shadow" />
              無料見積もり
            </motion.a>
          </div>
          {/* 説明文（背景強化） */}
          <div className="relative w-full mb-2 flex">
            <motion.p
              className="relative z-10 text-base sm:text-lg text-white font-normal leading-relaxed tracking-wide px-4 py-2 w-full text-center whitespace-nowrap overflow-auto"
              style={{ fontFamily: 'Noto Sans JP, Montserrat, Inter, Arial, sans-serif', letterSpacing: '0.01em', lineHeight: 1.7, textShadow: '1px 1px 2px #0008' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              最新AIツールとプロの知見を融合し、<span className="font-bold text-white">短納期・高品質・適正価格</span>を両立。<br />
              信頼と成果を重視したWebサイト制作をお約束します。
            </motion.p>
          </div>
        </div>
        {/* 右側：特徴ボックス（ミニマルカード型） */}
        <motion.div
          className="grid grid-cols-1 gap-6 mt-0 md:mt-0 md:ml-16 w-full md:w-[340px] items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >
          {/* 特徴1 */}
          <motion.div
            className="flex items-center gap-4 bg-[#F0F0F0]/90 border border-[#eaf6ff] rounded-xl px-6 py-5 min-w-[220px] max-w-full w-full shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#50E3C2" className="w-6 h-6 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-black font-medium text-base md:text-lg tracking-wide text-left">最先端AIツール活用</div>
          </motion.div>
          {/* 特徴2 */}
          <motion.div
            className="flex items-center gap-4 bg-[#F0F0F0]/90 border border-[#eaf6ff] rounded-xl px-6 py-5 min-w-[220px] max-w-full w-full shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.88, ease: 'easeOut' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#50E3C2" className="w-6 h-6 flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
            </svg>
            <div className="text-black font-medium text-base md:text-lg tracking-wide text-left">短納期（最短5日）</div>
          </motion.div>
          {/* 特徴3 */}
          <motion.div
            className="flex items-center gap-4 bg-[#F0F0F0]/90 border border-[#eaf6ff] rounded-xl px-6 py-5 min-w-[220px] max-w-full w-full shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.06, ease: 'easeOut' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#50E3C2" className="w-6 h-6 flex-shrink-0">
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
            </svg>
            <div className="text-black font-medium text-base md:text-lg tracking-wide text-left">適正価格（相場の1/2以下）</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}