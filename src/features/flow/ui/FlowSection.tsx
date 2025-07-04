"use client";

import { motion } from "framer-motion";

export default function FlowSection() {
  const steps = [
    {
      title: 'お問い合わせ・ご相談',
      desc: 'まずはお気軽にフォームまたはお電話でお問い合わせください。お客様の課題やご要望を丁寧にヒアリングします。',
    },
    {
      title: '要件定義・お見積り',
      desc: 'ヒアリング内容に基づき、最適なプランと明確なお見積りをご提案。Webサイトの目的やターゲットを明確にします。',
    },
    {
      title: 'デザイン・制作',
      desc: 'AIツールとプロのデザイナー・エンジニアが連携し、高品質なデザインとコーディングをスピーディーに行います。',
    },
    {
      title: '納品・公開',
      desc: '最終確認後、Webサイトを納品し公開します。操作方法のレクチャーやアフターサポートもご安心ください。',
    },
  ];

  return (
    <section className="py-20 bg-blue-50" id="flow">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12">制作の流れ</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* 縦ライン */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-400/70 -translate-x-1/2 z-0" />
        <div className="relative z-10 flex flex-col gap-10">
          {steps.map((step, i) => (
            <div key={i} className="relative flex md:flex-row flex-col items-center min-h-[120px]">
              {/* 左側（偶数ステップ用） */}
              {i % 2 === 0 ? (
                <motion.div
                  className="hidden md:flex w-1/2 justify-end"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                  <div className="bg-white rounded-xl shadow-xl px-8 py-5 text-left flex flex-col justify-center max-w-md ml-auto mr-0 md:mr-4">
                    <div className="font-bold text-blue-900 text-lg md:text-xl mb-1">{step.title}</div>
                    <div className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</div>
                  </div>
                </motion.div>
              ) : (
                <div className="hidden md:flex w-1/2" />
              )}
              {/* バッジ */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 bg-orange-400 text-white font-bold rounded-full flex items-center justify-center shadow-lg text-base border-4 border-white text-center">
                  {i + 1}
                </div>
              </motion.div>
              {/* 右側（奇数ステップ用） */}
              {i % 2 === 1 ? (
                <motion.div
                  className="hidden md:flex w-1/2 justify-start"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                >
                  <div className="bg-white rounded-xl shadow-xl px-8 py-5 text-left flex flex-col justify-center max-w-md mr-auto ml-0 md:ml-4">
                    <div className="font-bold text-blue-900 text-lg md:text-xl mb-1">{step.title}</div>
                    <div className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</div>
                  </div>
                </motion.div>
              ) : (
                <div className="hidden md:flex w-1/2" />
              )}
              {/* モバイル用中央表示 */}
              <motion.div
                className="md:hidden w-full flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              >
                <div className="bg-white rounded-xl shadow-xl px-8 py-5 text-left flex flex-col justify-center w-full max-w-md mt-8 mb-2">
                  <div className="font-bold text-blue-900 text-lg md:text-xl mb-1">{step.title}</div>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 