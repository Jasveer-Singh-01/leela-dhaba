import React from "react";
import { motion } from "framer-motion";
import { Tag, Star, Percent } from "lucide-react";
import offer50 from "../assets/images/offers/food-coupons.jpg";
import paytmCashback from "../assets/images/offers/paytm-cashback.png";
import freeDelivery from "../assets/images/offers/free-delivery.jpg";
import comboOffer from "../assets/images/offers/COMBO-OFFERS.png";
import specialOffer from "../assets/images/offers/specialOffers.jpg"; // 👈 Add your banner here

const offersData = [
  {
    id: 1,
    title: "50% OFF on Your First Order",
    description: "Enjoy half price on your first meal — no code needed!",
    code: "WELCOME50",
    image: offer50,
    rating: 4.7,
    bg: "bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100",
  },
  {
    id: 2,
    title: "Free Delivery on Orders Above ₹299",
    description: "Skip the delivery fee — just order above ₹299.",
    code: "FREEDEL",
    image: freeDelivery,
    rating: 4.5,
    bg: "bg-gradient-to-r from-green-100 via-teal-100 to-emerald-100",
  },
  {
    id: 3,
    title: "20% Cashback with Paytm",
    description: "Get instant cashback up to ₹100 on Paytm payments.",
    code: "PAYTM20",
    image: paytmCashback,
    rating: 4.8,
    bg: "bg-gradient-to-r from-blue-100 via-indigo-100 to-cyan-100",
  },
  {
    id: 4,
    title: "Flat ₹150 OFF on Combo Meals",
    description: "Order combos and enjoy flat ₹150 off automatically.",
    code: "COMBO150",
    image: comboOffer,
    rating: 4.6,
    bg: "bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100",
  },
];

const Offers = () => {
  return (
    <section className="pt-5 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 🎞️ Sliding Banner */}
        <div className="relative w-full overflow-hidden rounded-2xl mb-10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Adjust speed (smaller = faster)
              ease: "linear",
            }}
            className="flex w-[200%]"
          >
            {/* Two copies of banner for seamless infinite loop */}
            <img
              src={specialOffer}
              alt="Special Offer Banner"
              className="w-1/2 h-56 object-cover"
            />
            <img
              src={specialOffer}
              alt="Special Offer Banner Duplicate"
              className="w-1/2 h-56 object-cover"
            />
          </motion.div>

          {/* Optional overlay text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 text-white">
            <h2 className="text-3xl font-bold mb-2">🔥 Limited Time Offers</h2>
            <p className="text-lg font-medium">Grab your deal before it’s gone!</p>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Tag className="text-green-600" />
            Special Offers
          </h2>
          <button className="text-green-600 hover:underline font-medium">
            View All →
          </button>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offersData.map((offer) => (
            <motion.div
              key={offer.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition ${offer.bg}`}
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Percent size={14} /> Best Offer
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {offer.title}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-sm font-semibold">
                    <Star size={16} className="mr-1" />
                    {offer.rating}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-green-700">
                    Code:{" "}
                    <span className="bg-green-100 px-2 py-1 rounded">
                      {offer.code}
                    </span>
                  </span>
                  <button className="text-sm text-green-600 hover:text-green-700 font-semibold">
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
