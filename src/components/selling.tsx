import { useState } from "react";
import Slider from "react-slick";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Product Type Definition
interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

// Product List with high-quality skincare images
const products: Product[] = [
  {
    id: 1,
    name: "オーガニック保湿クリーム",
    price: "¥4,500",
    rating: 4.8,
    image: "https://inyoumarket.com/public/media/webp/2023/07/64c77e44bdae6-xl.webp",
  },
  {
    id: 2,
    name: "ナチュラルフェイスオイル",
    price: "¥5,200",
    rating: 4.9,
    image: "https://inyoumarket.com/public/media/webp/2025/03/67ceb038db0ff-xl.webp",
  },
  {
    id: 3,
    name: "ハーバルフェイスウォッシュ",
    price: "¥3,800",
    rating: 4.7,
    image: "https://inyoumarket.com/public/media/webp/2020/11/4264-xl.webp",
  },

  {
    id: 5,
    name: "アロマボディスクラブ",
    price: "¥5,800",
    rating: 4.9,
    image: "https://inyoumarket.com/public/media/webp/2024/12/675be1581459d-xl.webp",
  },
  {
    id: 6,
    name: "オーガニックハンドクリーム",
    price: "¥3,200",
    rating: 4.7,
    image: "https://inyoumarket.com/public/media/webp/2024/01/6591b404a3f4a-xl.webp",
  },
  {
    id: 7,
    name: "ビタミンC美容液",
    price: "¥6,000",
    rating: 4.8,
    image: "https://inyoumarket.com/public/media/webp/2024/12/675bdf1ca9f4c-xl.webp",
  },
  {
    id: 8,
    name: "ディープモイスチャライザー",
    price: "¥4,700",
    rating: 4.9,
    image: "https://inyoumarket.com/public/media/webp/2024/12/675bdeae90ace-xl.webp",
  },
];

export default function FeaturedProducts() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} がカートに追加されました！`);
  };

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.div
    className="mt-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    // viewport={{ once: true }}
  >
    <div id="best">
      <div className=" mx-auto px-6 sm:px-12">
      <p className="text-sm font-semibold text-white text-center mb-3">
  <span className="px-2 py-1 bg-[#777e4f] rounded-full">Best Seller</span>
</p>

        <h2 className="text-3xl font-bold text-center text-[#777e4f] sm:text-3xl">
          人気商品 & ベストセラー
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          自然由来の成分で作られたスキンケアアイテムをお試しください。お肌に優しく、環境にも配慮した商品です。
        </p>

        {/* Slick Carousel */}
        <div className="mt-12">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:scale-105">
                  <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-[#889159]">{product.name}</h3>
                    <p className="text-gray-700 mt-2 text-lg">{product.price}</p>
                    <div className="flex justify-center items-center mt-2">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar
                          key={index}
                          className={`text-yellow-400 ${
                            index < Math.round(product.rating) ? "fill-current" : "opacity-30"
                          }`}
                        />
                      ))}
                      <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 bg-[#777e4f] hover:bg-[#777e4f] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center w-full transition-all"
                    >
                      <AiOutlineShoppingCart className="mr-2" /> カートに追加
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div></motion.div>
  );
}
