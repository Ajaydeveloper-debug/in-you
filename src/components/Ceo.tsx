import { motion } from "framer-motion";


const colorClasses: { [key: string]: string } = {
  green: "bg-green-600 ",
  blue: "bg-blue-600 ",
  yellow: "bg-yellow-600 ",
  purple: "bg-purple-600 ",
  pink: "bg-pink-600 ",
  red: "bg-red-600 ",
};
const colorClasses1: { [key: string]: string } = {
  green: "text-green-600",
  blue: " text-blue-600",
  yellow: " text-yellow-600",
  purple: "text-purple-600",
  pink: " text-pink-600",
  red: "text-red-600",
};

export default function CeoRecommendation() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 lg:py-12 mx-auto" id="CEO">
            <p className="text-sm font-semibold text-white text-center mb-3">
  <span className="px-2 py-1 bg-[#777e4f] rounded-full">CEO Recommended</span>
</p>
      <h2 className="text-3xl text-gray-800 text-center font-extrabold lg:text-3xl">
        <span className="text-[#777e4f]">CEO</span> のおすすめスキンケアステップ
      </h2>
      <p className="mt-4 text-lg text-gray-600 text-center">
        CEOが実際に使用しているスキンケア製品のステップを紹介します。彼女の美肌の秘密を体験してください。
      </p>

      {/* CEO Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12 mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        {/* CEO Photo */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://macrobiotic-daisuki.jp/cms/wp-content/uploads/IMG_2958-1.jpg"
            alt="CEO"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-gray-200"
          />
        </div>

        {/* CEO Quote */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 leading-snug">
            私は毎日これらの製品を使用しています！
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            これらの製品を使用することで、肌のトーンが均一になり、乾燥やシワの悩みが解消されました。
            自然由来の成分で、肌に優しく、効果を実感できます。
          </p>
        </div>
      </motion.div>

      {/* Recommended Products Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <h3 className="text-3xl text-gray-800 text-center font-extrabold">
          <span className="text-[#777e4f]">CEO</span> おすすめのスキンケアステップ
        </h3>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Skincare Steps */}
          <Step
            imgSrc="https://inyoumarket.com/public/media/webp/2024/02/65c188e90647f-xl.webp"
            stepNumber="ステップ 1"
            title="クレンザー"
            description="肌に優しく、汚れをしっかり落とすクレンザー。"
            color="green"
          />
          <Step
            imgSrc="https://inyoumarket.com/public/media/webp/2023/09/64f99acd14767-xl.webp"
            stepNumber="ステップ 2"
            title="トナー"
            description="肌のpHバランスを整え、化粧水の吸収を良くするトナー。"
            color="blue"
          />
          <Step
            imgSrc="https://inyoumarket.com/public/media/webp/2023/07/64c77e44bdae6-xl.webp"
            stepNumber="ステップ 3"
            title="美容液"
            description="肌に栄養を与え、明るく輝く肌を実現する美容液。"
            color="yellow"
          />
          <Step
            imgSrc="https://inyoumarket.com/public/media/webp/2021/10/20210927_inyu_051-xl.webp"
            stepNumber="ステップ 4"
            title="アイクリーム"
            description="目元の保湿とエイジングケアをサポートするアイクリーム。"
            color="purple"
          />
          <Step
            imgSrc="https://inyoumarket.com/public/media/webp/026/000000002615/000000002615-01-xl.webp"
            stepNumber="ステップ 5"
            title="モイスチャライザー"
            description="高い保湿力で、乾燥から肌を守るモイスチャライザー。"
            color="pink"
          />
          <Step
            imgSrc="https://inyoumarket.com/public/media/webp/2020/09/IMG_0417-xl.webp"
            stepNumber="ステップ 6"
            title="日焼け止め"
            description="強力なUVカットで、肌を日焼けから守る日焼け止め。"
            color="red"
          />
        </div>
      </motion.div>
    </div>
  );
}

type StepProps = {
  imgSrc: string;
  stepNumber: string;
  title: string;
  description: string;
  color: string;
};

// Step Component with Scroll Animation
const Step: React.FC<StepProps> = ({ imgSrc, stepNumber, title, description, color }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // viewport={{ once: true }}
    >
      <img src={imgSrc} alt={title} className="w-full rounded-lg shadow-xl" />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${colorClasses[color]} text-white p-2 flex items-center justify-center rounded-xl font-bold`}
      >
        {stepNumber}
      </div>
      <div className="mt-6 text-center">


        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href="/#"
          className={`inline-flex items-center gap-x-1 mt-4 text-sm ${colorClasses1[color]} font-medium hover:underline`}
        >
          購入する
        </a>
      </div>
    </motion.div>
  );
};
