import { 
  FaInstagram, FaTiktok, FaYoutube, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaUsers, FaHeadset, FaBuilding, FaQuestionCircle, 
  FaShippingFast, FaRedo, FaShieldAlt, FaFileContract, 
  FaCookieBite, FaGlobe, FaBell, FaGift, FaHandshake
} from "react-icons/fa";

export default function Footer() {
  return (
    // bg-[#98a06e]
    <footer className=" bg-gradient-to-br from-[#a0a77c] to-[#9fa777] pt-12 pb-6 text-gray-800">
      
      <div className="mx-auto px-6 lg:px-20">

        {/* Logo & Branding */}
        <div className="flex justify-center mb-6">
          <img src="https://inyoumarket.com/public/dist/img/logo.png" alt="ブランド" className="h-16" />
        </div>

        {/* Top Section: Social Proof & Customer Support */}
        <div className="grid md:grid-cols-3 gap-8 border-b border-gray-900 pb-8">
          
          {/* Social Proof */}
          <div>
            <h3 className="text-xl font-semibold flex items-center"><FaUsers className="mr-2 "/> 100,000+ 幸せな顧客</h3>
            <p className="mt-2 text-sm">
              多くの顧客が私たちの製品を愛用しています。品質保証、顧客満足度100%！
            </p>
            <div className="mt-4 flex space-x-4">
              <img src="https://th.bing.com/th/id/OIP.3sNDt1-_EfbG2qpHJ-b-_wHaHa?rs=1&pid=ImgDetMain" alt="SSL セキュア" className="h-10"/>
              <img src="https://static.vecteezy.com/system/resources/previews/029/918/822/original/usda-organic-certified-badge-seal-united-states-department-of-agriculture-certification-logo-label-food-production-element-protect-natural-resources-and-safety-food-design-illustration-vector.jpg" alt="信頼の証" className="h-10"/>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold flex items-center"><FaHeadset className="mr-2"/> 24/7 カスタマーサポート</h3>
            <p className="mt-2 text-sm">いつでもお気軽にお問い合わせください。</p>
            <div className="mt-3 space-y-2">
              <p className="flex items-center"><FaPhone className="mr-2"/> +81 03-4212-7980</p>
              <p className="flex items-center"><FaEnvelope className="mr-2"/> saiyo@inyou.jp</p>
              <p className="flex items-center"><FaMapMarkerAlt className="mr-2"/> 〒100-0001 東京都千代田区</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold flex items-center"><FaGlobe className="mr-2"/> フォローしてください</h3>
            <p className="mt-2 text-sm">最新情報や特別セールをチェック！</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className=" hover:text-pink-600 text-3xl"><FaInstagram/></a>
              <a href="#" className=" hover:text-gray-600 text-3xl"><FaTiktok/></a>
              <a href="#" className=" hover:text-red-600 text-3xl"><FaYoutube/></a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Essential Links */}
        <div className="grid md:grid-cols-4 gap-8 text-sm mt-8">
          
          <div>
            <h4 className="text-lg font-semibold flex items-center"><FaBuilding className="mr-2"/> 会社情報</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-black flex items-center"><FaUsers className="mr-2"/> 私たちについて</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaEnvelope className="mr-2"/> お問い合わせ</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaBell className="mr-2"/> 採用情報</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center"><FaQuestionCircle className="mr-2"/> サポート</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-black flex items-center"><FaQuestionCircle className="mr-2"/> よくある質問</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaShippingFast className="mr-2"/> 配送情報</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaRedo className="mr-2"/> 返品・交換</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center"><FaGift className="mr-2"/> 特別オファー</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-black flex items-center"><FaGift className="mr-2"/> 割引＆プロモ</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaHandshake className="mr-2"/> パートナーシップ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center"><FaShieldAlt className="mr-2"/> 法的事項</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-black flex items-center"><FaShieldAlt className="mr-2"/> プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaFileContract className="mr-2"/> 利用規約</a></li>
              <li><a href="#" className="hover:text-black flex items-center"><FaCookieBite className="mr-2"/> クッキーポリシー</a></li>
            </ul>
          </div>
  
        </div>
      </div>
    
<p className="text-sm text-center mt-6">© {new Date().getFullYear()} InYou Market. All rights reserved.</p>

    </footer>
  );
}
