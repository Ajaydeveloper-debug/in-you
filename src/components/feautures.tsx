import { motion } from "framer-motion";
import { FaLeaf, FaFlask, FaRecycle, FaSmile, FaPaw, FaSpa } from "react-icons/fa";

const features = [
    { name: "オーガニック認証", description: "100%天然成分で作られ、防腐剤や合成化学物質を含みません。", icon: <FaLeaf className="text-green-600 text-3xl" /> },
    { name: "主要成分", description: "アロエベラ、ホホバオイル、ビタミンEを配合し、深い潤いと栄養を与えます。", icon: <FaFlask className="text-blue-600 text-3xl" /> },
    { name: "エコフレンドリーパッケージ", description: "環境に優しい生分解性素材を使用し、プラスチックを削減。", icon: <FaRecycle className="text-green-500 text-3xl" /> },
    { name: "肌タイプ", description: "敏感肌を含むすべての肌タイプに適しており、皮膚科医の推奨済み。", icon: <FaSmile className="text-yellow-500 text-3xl" /> },
    { name: "クルエルティフリー", description: "動物実験を行わず、PETA認証済みのエシカルスキンケア。", icon: <FaPaw className="text-pink-500 text-3xl" /> },
    { name: "アロマセラピー効果", description: "エッセンシャルオイルを配合し、リラックスとリフレッシュをサポート。", icon: <FaSpa className="text-purple-500 text-3xl" /> },
  ];
  
  export default function BestSellingFeature() {
    return (
      <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      // viewport={{ once: true }}
    >
      <div className="bg-white py-24" id="feaurure">
      <p className="text-sm font-semibold text-white text-center mb-3 ">
  <span className="px-2 py-1 bg-[#777e4f] rounded-full">Why Us</span>
</p>
         <h2 className="text-2xl text-gray-800 text-center font-extrabold lg:text-3xl 　sm:text-md ">
        なぜ <span className="text-[#777e4f]">In You Market</span> でお買い物をするのか？
      </h2>
        <div className="mx-auto  grid grid-cols-1 items-center gap-12 px-6 sm:px-12 lg:grid-cols-2 mt-12">
       
          {/* 左側 - 商品詳細 */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#889159] sm:text-2xl">
              人気No.1 オーガニックスキンケア
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              自然の恵みを感じられるオーガニックスキンケア。植物由来の成分で、肌に優しく栄養を与えます。
            </p>
  
            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-[#889159] pt-4">
                      <div className="mr-4 mb-4">{feature.icon}</div>
                  <dt className="text-lg font-extrabold text-[#889159]">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-800">{feature.description}</dd>
                </div>
              ))}
            </dl>
  
            {/* CTAボタン */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#777e4f] rounded-lg shadow-md hover:bg-green-700 transition-all"
              >
                今すぐ購入
              </a>
            </div>
          </div>
         <div >
         <div className="hidden sm:grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2023/09/650a9fef4ed42-xl.webp"
        className="size-full object-cover"
      />
    </div>
    <div className="h-64 w-44 overflow-hidden rounded-lg">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2023/07/64c77e44bdae6-xl.webp"
        className="size-full object-cover"
      />
    </div>
  </div>
  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    <div className="h-64 w-44 overflow-hidden rounded-lg">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2024/12/675bdf1ca9f4c-xl.webp"
        className="size-full object-cover"
      />
    </div>
    <div className="h-64 w-44 overflow-hidden rounded-lg">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2024/12/675bdeae90ace-xl.webp"
        className="size-full object-cover"
      />
    </div>
    <div className="h-64 w-44 overflow-hidden rounded-lg">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2024/12/675be1581459d-xl.webp"
        className="size-full object-cover"
      />
    </div>
  </div>
  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    <div className="h-64 w-44 overflow-hidden rounded-lg">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2024/05/664c5e9a18b25-xl.webp"
        className="size-full object-cover"
      />
    </div>
    <div className="h-64 w-44 overflow-hidden rounded-lg">
      <img
        alt=""
        src="https://inyoumarket.com/public/media/webp/2022/05/6290a2aa208b3-xl.webp"
        className="size-full object-cover"
      />
    </div>
  </div>
</div>

         </div>
          {/* 右側 - Bento Grid (左1枚大、右2枚小) */}
         
        </div>
      </div></motion.div>
    );
  }
  
//   <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
//   {/* 左 - 大きい画像 */}
//   <img
//     src="https://img.freepik.com/free-photo/flat-lay-medicinal-spices-herbs_23-2148776465.jpg?ga=GA1.1.1283775759.1738634671&semt=ais_hybrid"
//     alt="オーガニッククリーム"
//     className=" rounded-xl bg-green-100 shadow-lg "
//   />

//   {/* 右上 - 小さい画像 */}
//   <img
//     src="https://img.freepik.com/free-photo/view-natural-ingredients-arrangement_23-2148899381.jpg?t=st=1741745071~exp=1741748671~hmac=12668563415d0ea3217543a3bc065cc6f35bb102a2d4ac58ffb2f3dc7fb1d7e5&w=1480"
//     alt="天然成分"
//     className="rounded-xl bg-green-100 shadow-lg "
//   />

//   {/* 右下 - 小さい画像 */}
//   <img
//     src="https://img.freepik.com/free-photo/view-spa-elements-arrangement_23-2148290974.jpg?ga=GA1.1.1283775759.1738634671&semt=ais_hybrid"
//     alt="エコパッケージ"
//     className="rounded-xl bg-green-100 shadow-lg  h-"
//   />
//      <img
//     src="https://img.freepik.com/free-photo/bottle-ingredients-arrangement-view_23-2148899386.jpg?t=st=1741745031~exp=1741748631~hmac=851900378affff6643e1e99c97bd929a9098d9da09789d29007508d3d2319ec3&w=1480"
//     alt="エコパッケージ"
//     className="rounded-xl bg-green-100 shadow-lg   "
//   />
// </div>