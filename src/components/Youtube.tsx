export default function FeatureSection() {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-4xl text-gray-800 text-center font-extrabold lg:text-4xl dark:text-white">
        なぜ <span className="text-green-700">In You Market</span> でお買い物をするのか？
      </h2>
      <br />
      {/* Grid */}  
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full sm:h-[400px]">
        <img
            src="https://img.freepik.com/free-photo/front-view-woman-using-face-mask_23-2150467069.jpg?t=st=1741689969~exp=1741693569~hmac=678ac45d075f6cadb9ef16976d9e7dbb32d618090f0ec2ab01d4a4f8b180f7e4&w=1800"
            alt="Organic Skincare"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 lg:space-y-10">
          <p className="mt-3 text-gray-800 dark:text-neutral-400">
            私たちの製品は、あなたの肌を大切にし、持続可能な美しさを提供します。私たちが提供するスキンケアは、自然の恵みを活かしたエコフレンドリーな成分で、あなたの美しい肌を守ります。
          </p>

          {/* Key Selling Points */}
          <div className="space-y-6">
            {/* Key Point 1 */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-green-100 text-green-600 shadow-md">
                🌿
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-md font-semibold  text-green-900 dark:text-neutral-200 font-serif">
                  天然成分使用
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  私たちのスキンケア製品は、肌に優しい天然成分を使用し、肌本来の美しさを引き出します。化学成分を避け、自然なケアを提供します。
                </p>
              </div>
            </div>

            {/* Key Point 2 */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-blue-100 text-blue-600 shadow-md">
                💧
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold  text-green-900 dark:text-neutral-200 font-serif">
                  高い保湿力と栄養
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  私たちの製品は、乾燥肌をしっかり保湿し、栄養を与えることで、健康的でしっとりとした肌へ導きます。毎日のケアに最適です。
                </p>
              </div>
            </div>

            {/* Key Point 3 */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                🌸
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold  text-green-900 dark:text-neutral-200 font-serif">
                  肌の再生と修復
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  自然由来の成分が肌の再生を助け、ダメージを修復。日々の使用で健康的で明るい肌に導きます。
                </p>
              </div>
            </div>

            {/* Key Point 4 */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full bg-red-100 text-red-600 shadow-md">
                🌱
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold  text-green-900 dark:text-neutral-200 font-serif">
                  エコフレンドリーでサステナブル
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  私たちの製品は環境に配慮し、持続可能な方法で生産されています。あなたの美しさと地球の未来のために、エコな選択をしましょう。
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 text-sm text-green-600 decoration-2 hover:underline font-medium dark:text-green-400"
              href="#"
            >
              自然なスキンケアを体験する
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
