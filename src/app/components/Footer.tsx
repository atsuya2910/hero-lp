"use client";

export default function Footer() {
  return (
    <footer className="bg-[#23287a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社Festal</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold">所在地:</span><br />
              〒330-0802<br />
              埼玉県さいたま市大宮区宮町3丁目<br />
              1-7 宮町HSビル2F
            </p>
          </div>
          {/* お問い合わせ */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              電話: 048-888-0601<br />
              <span className="inline-block transition-transform duration-200 hover:scale-105">
                メール: <a href="mailto:info@festal-inc.com" className="underline hover:text-orange-300 transition">info@festal-inc.com</a>
              </span>
            </p>
          </div>
          {/* サービス */}
          <div>
            <h3 className="text-xl font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li className="transition-transform duration-200 hover:scale-105"><a href="#" className="text-gray-300 hover:text-orange-300 transition">コーポレートサイト制作</a></li>
              <li className="transition-transform duration-200 hover:scale-105"><a href="#" className="text-gray-300 hover:text-orange-300 transition">ECサイト制作</a></li>
              <li className="transition-transform duration-200 hover:scale-105"><a href="#" className="text-gray-300 hover:text-orange-300 transition">ランディングページ制作</a></li>
              <li className="transition-transform duration-200 hover:scale-105"><a href="#" className="text-gray-300 hover:text-orange-300 transition">サイトリニューアル</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 株式会社Festal All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 