"use client";

import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaHandshake } from 'react-icons/fa';

export default function ServiceSection() {
  return (
    <motion.section
      className="py-28 text-center relative overflow-hidden bg-white" id="service"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="inline-flex items-center gap-4 mb-10"
      >
        <span className="inline-block w-1.5 h-10 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight drop-shadow-sm">サービス概要</h2>
        <span className="inline-block w-1.5 h-10 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
      </motion.div>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        <motion.p
          className="text-xl md:text-2xl font-bold text-blue-900 mb-2 tracking-wide"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          営業・ITコンサルの知見とAI技術を融合し、成果につながるWebサイトを制作します。
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-gray-600 mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          最新AIツールの活用で、通常の半分以下の期間・コストで高品質なデザインを実現。コンサル品質のヒアリングと提案力で、ビジネス成果を最大化します。
        </motion.p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <motion.div
            className="bg-gradient-to-br from-blue-100 via-white to-cyan-50 rounded-2xl shadow-lg p-7 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div style={{ marginBottom: 12 }}><FaRobot size={40} color="#22d3ee" /></div>
            <div className="font-bold text-blue-900 text-lg mb-1">AI活用で効率化</div>
            <div className="text-gray-600 text-sm">最新AIツールで制作・運用を自動化。スピーディかつ高品質なWebサイトを実現します。</div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-blue-100 via-white to-cyan-50 rounded-2xl shadow-lg p-7 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div style={{ marginBottom: 12 }}><FaBolt size={40} color="#fb923c" /></div>
            <div className="font-bold text-blue-900 text-lg mb-1">最短5営業日で納品</div>
            <div className="text-gray-600 text-sm">AIとプロの連携で、短納期・高品質・柔軟なリテイク対応を両立します。</div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-blue-100 via-white to-cyan-50 rounded-2xl shadow-lg p-7 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div style={{ marginBottom: 12 }}><FaHandshake size={40} color="#38bdf8" /></div>
            <div className="font-bold text-blue-900 text-lg mb-1">コンサル品質の提案力</div>
            <div className="text-gray-600 text-sm">ビジネス理解・課題解決力に強み。成果に直結するWeb戦略をご提案します。</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 