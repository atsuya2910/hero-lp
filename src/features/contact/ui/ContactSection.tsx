"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="py-24 relative bg-center bg-cover" id="contact"
      style={{ backgroundImage: 'url(/images/bg4.png)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12">お問い合わせ</h2>
      <div className="max-w-2xl mx-auto bg-blue-50 rounded-2xl shadow-xl px-8 py-10">
        <form className="space-y-6">
          {/* 会社名 */}
          <div>
            <label className="block font-bold text-blue-900 mb-1">会社名</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition text-base bg-white placeholder-gray-400" placeholder="例：株式会社Festal" />
          </div>
          {/* お名前 */}
          <div>
            <label className="block font-bold text-blue-900 mb-1">お名前 <span className="text-red-500">*</span></label>
            <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition text-base bg-white placeholder-gray-400" placeholder="例：山田 太郎" />
          </div>
          {/* メールアドレス */}
          <div>
            <label className="block font-bold text-blue-900 mb-1">メールアドレス <span className="text-red-500">*</span></label>
            <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition text-base bg-white placeholder-gray-400" placeholder="例：info@example.com" />
          </div>
          {/* 電話番号 */}
          <div>
            <label className="block font-bold text-blue-900 mb-1">電話番号</label>
            <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition text-base bg-white placeholder-gray-400" placeholder="例：090-1234-5678" />
          </div>
          {/* お問い合わせ内容 */}
          <div>
            <label className="block font-bold text-blue-900 mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
            <textarea required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition text-base bg-white placeholder-gray-400" placeholder="ホームページ制作のご相談、お見積り依頼などお気軽にご記入ください。" />
          </div>
          {/* 送信ボタン */}
          <div className="pt-4 text-center">
            <motion.button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.08, backgroundColor: "#fb923c" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="material-symbols-outlined text-xl">send</span>
              無料見積りを依頼する
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
} 