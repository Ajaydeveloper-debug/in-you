import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ExclusiveOffers() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
    className="mt-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    // viewport={{ once: true }}
  >
    <div className="relative py-16 px-6 sm:px-12 lg:px-20">
      {/* Background Elements */}
      <div className="absolute inset-0 ">
        <img
          src="https://img.freepik.com/free-photo/horizontal-banner-cosmetic-product-with-jade-roller-gua-sha_23-2149446528.jpg?t=st=1741746408~exp=1741750008~hmac=0fc89ae1124e1b6d0433b5bb8ba94c11d896684a83250c29dc95a2cbfa1eda6a&w=1380"
          alt="Japanese Spa Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#777e4f]">
        🌿 初めてのご注文で 20% オフ 🎉 

         
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          **自然の恵みで肌をいたわる**  
          古来から受け継がれる日本の美容習慣に基づいた**オーガニックスキンケア**。  
          <br />
          **PURE20** を入力すると **20% 割引**！  
        </p>

        {/* Countdown Timer */}
        <div className="mt-6 flex justify-center space-x-6 text-gray-800 font-semibold text-xl">
          <div className="px-4 py-2 bg-white rounded-lg shadow-md">
            <span className="block">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="text-sm">時間</span>
          </div>
          <div className="px-4 py-2 bg-white rounded-lg shadow-md">
            <span className="block">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="text-sm">分</span>
          </div>
          <div className="px-4 py-2 bg-white rounded-lg shadow-md">
            <span className="block">{String(timeLeft.seconds).padStart(2, "0")}</span>
            <span className="text-sm">秒</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-6 inline-block bg-[#777e4f] text-white font-medium text-lg px-8 py-3 rounded-lg shadow-md hover:bg-green-900 transition duration-300"
        >
          今すぐ購入する
        </a>
      </div>
    </div>
    </motion.div>
  );
}
