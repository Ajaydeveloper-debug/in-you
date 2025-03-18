// import React from 'react';

// const Navbar: React.FC = () => {
//   return (
//  <section className="grid grid-cols-8 gap-6 max-w-7xl w-full mx-auto p-4 rounded-2xl mb-12 grid-flow-dense mt-4">
//   {/* Box 1 */}
//   <div className="rounded-2xl border relative min-h-52 grid-flow-dense col-span-4 row-span-3">
//     <img
//       src="https://img.freepik.com/free-photo/top-view-cosmetic-products-table_23-2148317579.jpg?t=st=1741671209~exp=1741674809~hmac=873d5c8d23c40948da81b242604515f929058317d2f32914c750efb8f46c84e0&w=1800"
//       alt="Organic Cosmetics"
//       className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//     />
//   <div className="absolute bottom-0 inset-x-0 z-10">
//         <div className="flex flex-col h-full p-4 sm:p-6">
//           <div className="text-green-600 text-lg font-semibold mb-3" style={{ fontFamily: 'Garamond, serif' }}>
//         100% ナチュラル
//       </div>
//       <h3 className="text-5xl font-bold leading-tight text-gray-900">
//         フレッシュスムージー & <br /> サマージュース
//       </h3>
//       <p className="text-lg text-gray-700 mt-4 leading-relaxed">
//         自然の恵みをたっぷり詰め込んだ、 <br />
//         体にやさしいドリンクをお楽しみください。
//       </p>
//       <a
//         href="#"
//         className="mt-6 bg-green-600 text-white text-lg font-medium py-3 px-6 rounded-2xl shadow-md hover:bg-gray-800 transition duration-300 w-24"
//         style={{ fontFamily: 'Garamond, serif' }}
//       >
//         今すぐ購入
//       </a>
//         </div>
//       </div>
//   </div>



//   {/* Box 2 */}
//   <div className="rounded-2xl border relative min-h-72 grid-flow-dense col-span-4 row-span-1">
//     <img
//       src="https://img.freepik.com/free-photo/front-view-skin-oil-droppers-composition_23-2148761423.jpg?t=st=1741671273~exp=1741674873~hmac=c092299c4ba3c3053904a9e881768b87a0c847ac6ce85524d3589be05430c2d0&w=1800"
//       alt="Eco-Friendly Beauty"
//       className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
//     <div className="flex flex-col h-full p-4 sm:p-6">
//           <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
//             Facebook is creating a news section in Watch to feature breaking news
//           </h3>
//           <p className="mt-2 text-white/80">
//             Facebook launched the Watch platform in August
//           </p>
//         </div>
//     </div>
//   </div>

//   {/* Box 3 */}
//   <div className="rounded-2xl border relative min-h-72 grid-flow-dense col-span-4 row-span-2">
//     <img
//       src="https://img.freepik.com/free-photo/natural-cosmetics-concept-with-copy-space_23-2148565398.jpg?t=st=1741671384~exp=1741674984~hmac=448e2f7bd44386d0a93bc88a9abffe5e77cd57a710dc662a6c183e0c47c68191&w=2000"
//       alt="Pure Ingredients"
//       className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
//      <div className="flex flex-col h-full p-4 sm:p-6">
//           <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
//             Facebook is creating a news section in Watch to feature breaking news
//           </h3>
//           <p className="mt-2 text-white/80">
//             Facebook launched the Watch platform in August
//           </p>
//         </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default Navbar;

// export default function Navbar() {
//     return (
//       <div className="relative overflow-hidden bg-white">
//         <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
//           <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//             <div className="sm:max-w-lg">
//               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                 Summer styles are finally here
//               </h1>
//               <p className="mt-4 text-xl text-gray-500">
//                 This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
//                 if you live or die.
//               </p>
//             </div>
//             <div>
//               <div className="mt-10">
//                 {/* Decorative image grid */}
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//                 >
//                   <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                     <div className="flex items-center space-x-6 lg:space-x-8">
//                       <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                         <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                           <img
//                             alt=""
//                             src="https://img.freepik.com/free-photo/natural-cosmetics-concept-with-copy-space_23-2148565398.jpg?t=st=1741671384~exp=1741674984~hmac=448e2f7bd44386d0a93bc88a9abffe5e77cd57a710dc662a6c183e0c47c68191&w=2000"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                         <div className="h-64 w-44 overflow-hidden rounded-lg">
//                           <img
//                             alt=""
//                             src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                       </div>
//                       <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                         <div className="h-64 w-44 overflow-hidden rounded-lg">
//                           <img
//                             alt=""
//                             src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                         <div className="h-64 w-44 overflow-hidden rounded-lg">
//                           <img
//                             alt=""
//                             src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                         <div className="h-64 w-44 overflow-hidden rounded-lg">
//                           <img
//                             alt=""
//                             src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                       </div>
//                       <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                         <div className="h-64 w-44 overflow-hidden rounded-lg">
//                           <img
//                             alt=""
//                             src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                         <div className="h-64 w-44 overflow-hidden rounded-lg">
//                           <img
//                             alt=""
//                             src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
//                             className="size-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
  
//                 <a
//                   href="#"
//                   className="inline-block rounded-2xl border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//                 >
//                   Shop Collection
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
import React from 'react';

const Navbar: React.FC = () => {
  // bg-gradient-to-br from-[#bec691] to-[#bec691]
   
        return (
            <section className="grid grid-cols-1 md:grid-cols-8 gap-6  w-full mx-auto p-4 rounded-2xl py-28 bg-gradient-to-br from-[#a0a77c] to-[#9fa777]">
            {/* Box 1 */}
            <div className="relative col-span-1 md:col-span-4 row-span-3 rounded-2xl overflow-hidden flex flex-col justify-center p-8 text-left">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900" style={{ fontFamily: 'Garamond, serif' }}>
              オーガニックスキンケアの贅沢な輝き
              </h3>
              <p className="text-md md:text-lg text-gray-700 mt-4 leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
              天然由来の成分で、肌にやさしく。持続可能な美しさを手に入れましょう。
              </p>
              <a href="#" className="mt-6 bg-gray-900 text-white text-sm md:text-md font-medium py-3 px-6 rounded-2xl shadow-md hover:bg-gray-700 transition duration-300 w-32" style={{ fontFamily: 'Garamond, serif' }}>
                今すぐ購入
              </a>
              <img
                src="https://img.freepik.com/free-photo/flat-lay-various-products-skincare_23-2148645624.jpg?t=st=1741843693~exp=1741847293~hmac=862ee508293d5cc2e46a039bd426599e03b4cde69886b022058110502428f8b2&w=1800"
                alt="Organic Cosmetics"
                className="w-full md:w-3/4 h-auto object-cover rounded-2xl mt-4"
              />
            </div>
            
            {/* Box 2 */}
            <div className="relative col-span-1 md:col-span-4 row-span-1 rounded-2xl overflow-hidden flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Garamond, serif' }}>
              100%ナチュラル&サステナブル
              </h3>
              <p className="text-md md:text-lg text-gray-700 mt-2 leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
              無添加で環境に優しい素材を使用。肌にも地球にもやさしい選択を。
              </p>
              <img
                src="https://img.freepik.com/free-photo/cosmetic-products-treatment-desk_23-2148574966.jpg?t=st=1741843742~exp=1741847342~hmac=0ecf6a2c8e38e2ce7398766c02c6769f44fb9174bd7671af41584ce8c2edebc1&w=1800"
                alt="Eco-Friendly Beauty"
                className="w-full md:w-3/4 h-auto object-cover rounded-2xl mt-4"
              />
            </div>
            
            {/* Box 3 */}
            <div className="relative col-span-1 md:col-span-4 row-span-2 rounded-2xl overflow-hidden flex flex-col justify-center text-left p-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Garamond, serif' }}>
              自然の力で素肌を守る
              </h3>
              <p className="text-md md:text-lg text-gray-700 mt-2 leading-relaxed" style={{ fontFamily: 'Garamond, serif' }}>
              化学物質を使わず、肌本来の美しさを引き出します。自然の恵みを大切に。
              </p>
              <img
                src="https://img.freepik.com/free-photo/frame-natural-cosmetics_23-2148574891.jpg?t=st=1741843843~exp=1741847443~hmac=8a9cbcf3e5d7adc55beb1e95d5be639eb1759b7f9d34e0426f6fda7fe334e270&w=1800"
                alt="Pure Ingredients"
                className="w-full md:w-3/4 h-auto object-cover rounded-2xl mt-4"
              />
            </div>
            
          </section>

        );
      }
      ;

export default Navbar;

