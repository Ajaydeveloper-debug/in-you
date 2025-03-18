import { motion } from "framer-motion";
import { useState } from "react";

export default function InfluencerFeed() {
  const [influencers] = useState([
    {
      name: "Yuki Hanabira",
      username: "@yuki_beauty",
      image: "https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg",
      postImage: "https://img.freepik.com/free-photo/top-view-cosmetic-products-table_23-2148317579.jpg",
      postLink: "https://instagram.com/p/xyz123",
      caption: "Loving my skincare routine with PURE20! 🌿✨ #GlowWithUs",
    },
    {
      name: "Emi Takahashi",
      username: "@emi_skincare",
      image: "https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg",
      postImage: "https://img.freepik.com/free-photo/front-view-skin-oil-droppers-composition_23-2148761423.jpg",
      postLink: "https://instagram.com/p/abc456",
      caption: "Achieving glowing skin with the best organic skincare. #GlowWithUs 🌟",
    },
    {
      "name": "Ueda Takahashi",
      "username": "@ueda_skincare",
      "image": "https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg",
      "postImage": "https://img.freepik.com/free-photo/view-spa-elements-arrangement_23-2148290974.jpg",
      "postLink": "https://instagram.com/p/def789",
      "caption": "Embracing self-care with the finest natural skincare essentials. ✨ #GlowWithUs"
    }
    
    // Add more influencer objects here
  ]);

  return (
    <motion.div
    className="mt-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    // viewport={{ once: true }}
  >
    <div className="relative py-16 px-6 sm:px-12 lg:px-20" id="glow">
      {/* Background Image (optional) */}
      <div className="absolute inset-0">
        {/* <img
          src="https://img.freepik.com/free-photo/beautiful-organic-cosmetics_23-2148899373.jpg"
          alt="Social Proof Background"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Content */}
      <div className="relative mx-auto  text-center">
      <p className="text-sm font-semibold text-white text-center mb-3">
  <span className="px-2 py-1 bg-[#777e4f] rounded-full">Glow with us</span>
</p>
        <h2 className="text-2xl sm:text-2xl font-extrabold text-[#777e4f]">
          日本の美しい影響力者たちと一緒に
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          ここでは、日本の有名なインフルエンサーたちが
          <span className="font-semibold text-[#889159]">**PURE20**</span>
          を使った美しいスキンケア体験をシェアしています。  
          インスタグラムで
          <span className="font-semibold text-[#889159]">#GlowWithUs</span>
          を使用して、私たちの自然な美しさを広めましょう！
        </p>

        {/* Instagram Feed */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencers.map((influencer, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Influencer Profile */}
              <div className="flex items-center p-4">
                <img
                  src={influencer.image}
                  alt={`${influencer.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{influencer.name}</p>
                  <p className="text-sm text-gray-600">{influencer.username}</p>
                </div>
              </div>

              {/* Post Image */}
              <a href={influencer.postLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={influencer.postImage}
                  alt={`${influencer.name} post`}
                  className="w-full object-cover"
                />
              </a>

              {/* Post Caption */}
              <div className="p-4">
                <p className="text-sm text-gray-800">{influencer.caption}</p>
                <a
                  href={influencer.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#889159] hover:text-[777e4f]"
                >
                  投稿を見る
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold">
            🌿 あなたも <span className=" text-[#889159]">#GlowWithUs</span> に参加して、美しい瞬間をシェアしよう 🌿
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            インスタグラムで #GlowWithUs をタグ付けして、私たちのコミュニティの一員になりましょう。自然の恵みを皆さんと一緒に感じることを楽しみにしています。
          </p>
          {/* <a
  href="https://www.instagram.com/explore/tags/glowwithus/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-gradient-to-br from-[#727d45] to-[#9ab283] text-white font-medium text-lg px-8 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
>
  📸 #GlowWithUs を今すぐチェック
</a> */}

        </div>
      </div>
    </div></motion.div>
  );
}
