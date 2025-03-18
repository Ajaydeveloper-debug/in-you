import { motion } from "framer-motion";

export const BlogSection = () => (
  <motion.div
  className="mt-16"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  // viewport={{ once: true }}
>
      {/* Card Blog */}
      <div className=" px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 mx-auto " id = 'blog'>
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <span className="px-2 py-1 text-xs font-semibold text-white bg-[#777e4f] rounded-full ">
    Blog
  </span>
          <h2 className="text-3xl font-bold md:text-3xl md:leading-tight text-[#777e4f] mt-2">
            美容ブログ
          </h2>
          <p className="mt-1 text-gray-600 ">
            最新のスキンケアトレンドや美容の秘訣をご紹介します。
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://img.freepik.com/free-photo/smiley-woman-bathrobe-with-copy-space_23-2148389923.jpg?ga=GA1.1.1283775759.1738634671&semt=ais_hybrid"
                alt="美容ブログ画像"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 ">
                肌に優しいナチュラルスキンケアの魅力
              </h3>
              <p className="mt-5 text-gray-600 ">
                天然由来のスキンケア製品で肌を健やかに保つ方法をご紹介します。
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="size-8 rounded-full"
                src="https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg"
                alt="著者"
              />
              <div>
                <h5 className="text-sm text-gray-800 ">
                  著者: 田中 美咲
                </h5>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://img.freepik.com/free-photo/close-up-smiley-woman-with-beauty-tools_23-2149182107.jpg?ga=GA1.1.1283775759.1738634671&semt=ais_hybrid"
                alt="美容ブログ画像"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 ">
                美肌を作るためのスキンケアルーチン
              </h3>
              <p className="mt-5 text-gray-600 ">
                朝と夜の正しいスキンケアルーチンをご紹介します。
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="size-8 rounded-full"
                src="https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg"
                alt="著者"
              />
              <div>
                <h5 className="text-sm text-gray-800 ">
                  著者: 佐藤 玲奈
                </h5>
              </div>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://img.freepik.com/free-photo/beautiful-asian-woman-posing-with-facial-cream_23-2149369993.jpg?ga=GA1.1.1283775759.1738634671&semt=ais_hybrid"
                alt="美容ブログ画像"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 ">
                紫外線対策と日焼け止めの選び方
              </h3>
              <p className="mt-5 text-gray-600 ">
                肌を守るための日焼け止めの正しい使い方を解説します。
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="size-8 rounded-full"
                src="https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg"
                alt="著者"
              />
              <div>
                <h5 className="text-sm text-gray-800 ">
                  著者: 山本 花子
                </h5>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}
        {/* Card */}
        <div className="mt-12 text-center">
          <a
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-[#889159] shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  "
            href="#"
          >
            もっと読む
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Blog */}
 </motion.div>
  )
  
  export default BlogSection;
