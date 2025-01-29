import React from "react";
import data from "../data/prices.json";
import PricingCard from "./PricingCard";

const PricingStrategy = () => {
  const prices = data.prices;

  return (
    <div className="bg-[#14141c] text-white py-16 px-6 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold w-full flex flex-col items-center">
          Our Pricing Strategy
          <div className=" w-[98px] rounded-b-md h-[5px] bg-[#e4d804] mt-3 flex justify-center">
              <div className="w-[30px] rounded-b-md mt-1 h-[5px] bg-[#e4d804]"></div>
            </div>
        </h2>
        <p className="text-sm md:text-base mt-2 text-gray-400">
          Flexible plans tailored to fit your needs. Choose the one that's right for you!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0">
        {prices.map((price, index) => (
          <PricingCard key={index} {...price} />
        ))}
      </div>
    </div>
  );
};

export default PricingStrategy;
