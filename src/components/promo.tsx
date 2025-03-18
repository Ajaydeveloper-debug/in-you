import { FaLeaf, FaFlask, FaRecycle, FaSmile, FaPaw, FaSpa } from "react-icons/fa";

const features = [
    { name: "オーガニック認証", description: "100%天然成分で作られ、防腐剤や合成化学物質を含みません。", icon: <FaLeaf className="text-green-600 text-3xl" /> },
    { name: "主要成分", description: "アロエベラ、ホホバオイル、ビタミンEを配合し、深い潤いと栄養を与えます。", icon: <FaFlask className="text-blue-600 text-3xl" /> },
    { name: "エコフレンドリーパッケージ", description: "環境に優しい生分解性素材を使用し、プラスチックを削減。", icon: <FaRecycle className="text-green-500 text-3xl" /> },
    { name: "肌タイプ", description: "敏感肌を含むすべての肌タイプに適しており、皮膚科医の推奨済み。", icon: <FaSmile className="text-yellow-500 text-3xl" /> },
    { name: "クルエルティフリー", description: "動物実験を行わず、PETA認証済みのエシカルスキンケア。", icon: <FaPaw className="text-pink-500 text-3xl" /> },
    { name: "アロマセラピー効果", description: "エッセンシャルオイルを配合し、リラックスとリフレッシュをサポート。", icon: <FaSpa className="text-purple-500 text-3xl" /> },
  ];






export default function Navbar() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">
              人気No.1 オーガニックスキンケア
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              自然の恵みを感じられるオーガニックスキンケア。植物由来の成分で、肌に優しく栄養を与えます。
            </p>
  
            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-green-300 pt-4">
                      <div className="mr-4 mb-4">{feature.icon}</div>
                  <dt className="text-lg font-extrabold text-green-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
  
            {/* CTAボタン */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-all"
              >
                今すぐ購入
              </a>
            </div>
          </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://img.freepik.com/free-photo/natural-cosmetics-concept-with-copy-space_23-2148565398.jpg?t=st=1741671384~exp=1741674984~hmac=448e2f7bd44386d0a93bc88a9abffe5e77cd57a710dc662a6c183e0c47c68191&w=2000"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
           
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }