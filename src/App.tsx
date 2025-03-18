import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCoffee, FaSoap, FaTint, FaShoppingCart, FaSeedling, FaAppleAlt, FaCarrot, FaLemon, FaPepperHot, FaBroom, FaEyeDropper, FaHandSparkles, FaMask } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import Foo from './components/Swipper'
import FeatureSection from './components/Youtube'
import CeoRecommendation from './components/Ceo'
import Navbar from './components/promo'
import Example from './components/Header'
import BestSellingFeature from './components/feautures'
import FeaturedProducts from './components/selling'
import ExclusiveOffers from './components/discount'
import InfluencersSection from './components/insta'
import Footer from './components/Footer'
import BlogSection from './components/blog'














    const categories = [
      { name: "スキンケア", icon: <FaSoap className="text-[#5a6135] text-2xl" /> },
      { name: "フェイスクリーム", icon: <FaEyeDropper className="text-[#777e4f] text-2xl" /> },
      { name: "クレンジング", icon: <FaBroom className="text-[#777e4f] text-2xl" /> },
      { name: "美容液", icon: <FaTint className="text-[#777e4f] text-2xl" /> },
      { name: "オーガニックソープ", icon: <FaMask className="text-[#777e4f] text-2xl" /> },
      { name: "オーガニック化粧品", icon: <FaLeaf className="text-[#777e4f] text-2xl" /> },
      // { name: "ヘアケア", icon: <FaComb className="text-[#777e4f] text-2xl" /> },
      { name: "ボディケア", icon: <FaHandSparkles className="text-[#777e4f] text-2xl" /> }
    ];
    
  

    const products = [
      // スキンケア (Skincare)
      { 
        category: "スキンケア", 
        name: "オーガニックバーム", 
        price: "2,800円", 
        image: "https://inyoumarket.com/public/media/webp/2023/02/63ed7a120b16c-xl.webp", 
        description: "100%オーガニック成分で作られたスキンケアバーム。乾燥肌に最適です。"
      },
      { 
        category: "スキンケア", 
        name: "フェイスクリーム", 
        price: "3,200円", 
        image: "https://inyoumarket.com/public/media/webp/2024/12/675bdfb268273-xl.webp", 
        description: "天然成分で作られた保湿フェイスクリーム。しっとりとした肌に導きます。"
      },
      { 
        category: "スキンケア", 
        name: "クレンジングオイル", 
        price: "1,800円", 
        image: "https://inyoumarket.com/public/media/webp/2024/12/675be0d889846-xl.webp", 
        description: "肌に優しいオーガニッククレンジングオイル。メイクや汚れをしっかりと落とします。"
      },
      { 
        category: "スキンケア", 
        name: "オーガニックフェイスマスク", 
        price: "1,200円", 
        image: "https://inyoumarket.com/public/media/webp/2022/05/6290a2aa208b3-xl.webp", 
        description: "天然オーガニック成分を使用したフェイスマスク。肌をリフレッシュし、潤いを与えます。"
      },
    
      // フェイスクリーム (Face Cream)
      { 
        category: "フェイスクリーム", 
        name: "保湿フェイスクリーム", 
        price: "3,500円", 
        image: "https://inyoumarket.com/public/media/webp/2022/05/6290a2aa208b3-xl.webp", 
        description: "ナチュラル成分を使用した高保湿フェイスクリーム。"
      },
      { 
        category: "フェイスクリーム", 
        name: "ビタミンC フェイスクリーム", 
        price: "4,000円", 
        image: "https://inyoumarket.com/public/media/webp/2023/07/64a210466a9d5-xl.webp", 
        description: "ビタミンC配合で肌を明るく健康的に導くフェイスクリーム。"
      },
      { 
        category: "フェイスクリーム", 
        name: "オーガニックデイクリーム", 
        price: "3,800円", 
        image: "https://inyoumarket.com/public/media/webp/2023/04/642cc99ed944b-xl.webp", 
        description: "紫外線対策にも適したデイクリーム。軽い付け心地が特徴。"
      },
      { 
        category: "フェイスクリーム", 
        name: "ナイトリペアクリーム", 
        price: "4,500円", 
        image: "https://inyoumarket.com/public/media/webp/2023/01/63c8ce9cb205f-xl.webp", 
        description: "夜のスキンケアに最適なリッチな保湿クリーム。"
      },
    
      // クレンジング (Cleansing)
      { 
        category: "クレンジング", 
        name: "オーガニッククレンジングミルク", 
        price: "2,500円", 
        image: "https://inyoumarket.com/public/media/webp/2023/01/63c8cdb384d68-xl.webp", 
        description: "敏感肌にも優しいクレンジングミルク。"
      },
      { 
        category: "クレンジング", 
        name: "ディープクレンジングオイル", 
        price: "3,000円", 
        image: "https://inyoumarket.com/public/media/webp/2024/02/65c188e90647f-xl.webp", 
        description: "メイクをしっかり落としつつ、肌の潤いを守るクレンジングオイル。"
      },
      { 
        category: "クレンジング", 
        name: "ナチュラルクレンジングフォーム", 
        price: "2,000円", 
        image: "https://inyoumarket.com/public/media/webp/2023/08/64ee88222a3a0-xl.webp", 
        description: "泡立ちの良い、優しい使い心地のクレンジングフォーム。"
      },
      { 
        category: "クレンジング", 
        name: "炭入りクレンジングウォーター", 
        price: "2,800円", 
        image: "https://inyoumarket.com/public/media/webp/2022/05/6290a2aa208b3-xl.webp", 
        description: "毛穴汚れをすっきり落とす炭入りクレンジングウォーター。"
      },
    
      // 美容液 (Serums)
      { 
        category: "美容液", 
        name: "オーガニックビタミンC美容液", 
        price: "5,000円", 
        image: "https://inyoumarket.com/public/media/webp/2023/08/64ee869859bf8-xl.webp", 
        description: "肌を明るく保つビタミンC配合の美容液。"
      },
      { 
        category: "美容液", 
        name: "保湿美容液", 
        price: "4,200円", 
        image: "https://inyoumarket.com/public/media/webp/2023/08/64ee88222a3a0-xl.webp", 
        description: "乾燥肌のための高保湿美容液。"
      },
      { 
        category: "美容液", 
        name: "エイジングケア美容液", 
        price: "6,000円", 
        image: "https://inyoumarket.com/public/media/webp/2023/09/650c0f5e32f9e-xl.webp", 
        description: "アンチエイジングに適した美容液。"
      },
      { 
        category: "美容液", 
        name: "リフトアップ美容液", 
        price: "5,500円", 
        image: "https://inyoumarket.com/public/media/webp/2023/08/64ee87885d6a8-xl.webp", 
        description: "肌の引き締めをサポートするリフトアップ美容液。"
      },



      { 
        category: "オーガニックソープ", 
        name: "ラベンダーオーガニックソープ", 
        price: "1,200円", 
        image: "https://inyoumarket.com/public/media/webp/2025/03/67ceb038db0ff-xl.webp",
        description: "心を落ち着かせるラベンダーの香りのオーガニックソープ。"
      },
      { 
        category: "オーガニックソープ", 
        name: "シアバターソープ", 
        price: "1,500円", 
        image: "https://inyoumarket.com/public/media/webp/2023/09/650a9fef4ed42-xl.webp",
        description: "高保湿シアバター配合の優しい使い心地のソープ。"
      },
      { 
        category: "オーガニックソープ", 
        name: "炭石鹸 (ディープクレンジング)", 
        price: "1,800円", 
        image: "https://inyoumarket.com/public/media/webp/2023/09/650941d662a55-xl.webp",
        description: "毛穴の汚れをしっかり吸着する炭入りオーガニックソープ。"
      },
      { 
        category: "オーガニックソープ", 
        name: "ハニー&オートミールソープ", 
        price: "1,600円", 
        image: "https://inyoumarket.com/public/media/webp/2023/09/6509423d61fe9-xl.webp",
        description: "ハチミツとオートミール配合で肌にやさしい保湿石鹸。"
      }
      ,
    
        // マスク (Mask)
        { 
          category: "マスク", 
          name: "オーガニックフェイスマスク", 
          price: "1,500円", 
          image: "https://inyoumarket.com/public/media/webp/2025/03/67ceb038db0ff-xl.webp",
          description: "天然成分配合のフェイスマスク。お肌に潤いを与え、ハリを保ちます。" 
        },
        { 
          category: "マスク", 
          name: "クレイマスク", 
          price: "2,200円", 
          image: "https://inyoumarket.com/public/media/webp/2023/09/650a9fef4ed42-xl.webp",
          description: "毛穴の汚れを取り除く天然クレイマスク。"
        },
        { 
          category: "マスク", 
          name: "シートマスク (ヒアルロン酸配合)", 
          price: "1,800円", 
          image: "https://inyoumarket.com/public/media/webp/2023/09/650941d662a55-xl.webp",
          description: "ヒアルロン酸たっぷりのシートマスクでしっかり保湿。"
        },
        { 
          category: "マスク", 
          name: "コラーゲンフェイスマスク", 
          price: "2,500円", 
          image: "https://inyoumarket.com/public/media/webp/2023/09/6509423d61fe9-xl.webp",
          description: "エイジングケアに最適なコラーゲン配合のマスク。"
        },
      
        // オーガニック化粧品 (Organic Cosmetics)
        { 
          category: "オーガニック化粧品", 
          name: "オーガニックリップバーム", 
          price: "1,200円", 
          image: "https://inyoumarket.com/public/media/webp/2024/05/664c5e9a18b25-xl.webp",
          description: "100%ナチュラル成分のリップバーム。"
        },
        { 
          category: "オーガニック化粧品", 
          name: "ナチュラルBBクリーム", 
          price: "3,000円", 
          image: "https://inyoumarket.com/public/media/webp/2024/12/675bdeae90ace-xl.webp",
          description: "肌に優しく、しっかりカバーできるオーガニックBBクリーム。"
        },
        { 
          category: "オーガニック化粧品", 
          name: "ミネラルファンデーション", 
          price: "3,800円", 
          image: "https://inyoumarket.com/public/media/webp/2023/09/64f54f2289cc4-xl.webp",
          description: "天然ミネラル成分を使用した軽いつけ心地のファンデーション。"
        },
        { 
          category: "オーガニック化粧品", 
          name: "ナチュラルチーク", 
          price: "2,500円", 
          image: "https://inyoumarket.com/public/media/webp/2022/05/6290a2aa208b3-xl.webp",
          description: "肌に馴染みやすいオーガニックチーク。"
        },
      
        // ボディケア (Body Care)
        { 
          category: "ボディケア", 
          name: "オーガニックボディローション", 
          price: "2,800円", 
          image: "https://inyoumarket.com/public/media/webp/2023/07/64ab97b0f4184-xl.webp",
          description: "しっとり肌を保つ天然オイル配合のボディローション。"
        },
        { 
          category: "ボディケア", 
          name: "ナチュラルボディスクラブ", 
          price: "3,200円", 
          image: "https://inyoumarket.com/public/media/webp/2023/07/64ab8fc24a45d-xl.webp",
          description: "古い角質を優しく取り除くオーガニックボディスクラブ。"
        },
        { 
          category: "ボディケア", 
          name: "オーガニックボディソープ", 
          price: "2,000円", 
          image: "https://inyoumarket.com/public/media/webp/2023/07/64ab8f0f9c968-xl.webp",
          description: "敏感肌にも使える低刺激なボディソープ。"
        },
        { 
          category: "ボディケア", 
          name: "アロママッサージオイル", 
          price: "3,500円", 
          image: "https://inyoumarket.com/public/media/webp/2022/07/62ccd22a3e326-xl.webp",
          description: "リラックス効果のあるアロマオイル配合のマッサージオイル。"
        }
      ];
      
    
    

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("スキンケア");

  return (
    <div className="font-sans ">
      {/* <nav className=" w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
        <img src="https://inyoumarket.com/public/dist/img/logo.png" alt="ロゴ" className="w-28" />
        <div className="flex gap-6 text-green-700 font-semibold">
          <a href="#about">オーガニックとは？</a>
          <a href="#products">商品一覧</a>
          <a href="#contact">お問い合わせ</a>
        </div>
      </nav> */}
      
{/* 
<nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="https://inyoumarket.com/public/dist/img/logo.png" alt="ロゴ" className="w-28" />
       
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-green-600 rounded-sm md:bg-transparent md:text-green-600 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<section>
<Example/>
</section>

     
      <section className="relative">
      <Foo/>
  {/* Background Image */}
  {/* <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://inyoumarket.com/public/media/webp/2025/01/678762cb2b6c5.webp')" }}></div> */}

  {/* Banner Content */}

  {/* <motion.h1

    className="text-5xl font-extrabold tracking-tight leading-tight relative z-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    健康的な生活をオーガニックで
  </motion.h1> */}

  {/* CTA Button */}
  {/* <motion.a
    href="#products"
    className="mt-6 inline-block py-3 px-6 bg-green-600 text-white rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 hover:bg-green-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    今すぐ見る
  </motion.a> */}
 
</section>
<FeaturedProducts/>
<ExclusiveOffers/>
 



{/* <FeatureSection/> */}
<p className="text-sm font-semibold text-white text-center mb-3 mt-20">
  <span className="px-2 py-1 bg-[#777e4f] rounded-full">Our products</span>
</p>

<h2 className="text-4xl text-gray-800 text-center font-extrabold lg:text-4xl 　sm:text-md  ">
<span className="text-[#777e4f]">In You Market</span> のスキンケア
      </h2>

      <div className="flex justify-center items-center gap-6 my-10 flex-wrap sm:flex-nowrap  sm:px-4">
  {categories.map((cat, index) => (
    <button
      key={index}
      onClick={() => setSelectedCategory(cat.name)}
      className={`w-32 p-4  text-center rounded-lg transition-all duration-300 ease-in-out transform flex flex-col items-center ${
        selectedCategory === cat.name
          ? 'bg-[#cfd8a5]'
          : 'bg-white hover:bg-gray-100'
      } hover:scale-105`}
    >
      <div className="text-xl ">{cat.icon}</div> {/* Adjusted icon size */}
      <p className="text-sm font-semibold  mt-2">{cat.name}</p>
    </button>
  ))}
</div>





<motion.div
        className="flex flex-col lg:flex-row items-center gap-12 mt-12" id="products"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
      
<section id="products" className="mx-auto px-4">
  {/* <h2 className="text-3xl text-green-700 font-bold mb-6">オーガニック商品一覧</h2> */}
  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 ">
    {products.filter(product => product.category === selectedCategory).map((product, index) => (
      <motion.div
        key={index}
        className="bg-white shadow-sm rounded-xl p-4 flex flex-col justify-between h-full "
        whileHover={{ scale: 1.05 }}
      >
        <img src={product.image} alt={product.name} className="rounded-xl w-full mb-4" />
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-[#697042] font-semibold">{product.price} <span className="text-sm text-gray-600">(税込)</span></p>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p> {/* Description added here */}
        
        {/* Button aligned to the bottom */}
        <div className="mt-auto">
          <button className="mt-3 bg-[#777e4f] text-white py-2 px-4 rounded-lg flex items-center gap-2">
            <FaShoppingCart /> 購入する
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</section></motion.div>


      <BestSellingFeature/>
<section>
  <CeoRecommendation/>
</section>
<BlogSection/>
<InfluencersSection/>


      
    
        {/* <h2 className="text-3xl font-bold">お問い合わせ</h2>
        <p className="mt-4">ご質問がございましたら、お気軽にお問い合わせください。</p>
        <button className="mt-6 bg-white text-green-700 py-2 px-6 rounded-lg font-bold">
          お問い合わせはこちら
        </button> */}
        <Footer/>
 
    </div>
  );
};

export default LandingPage;
