import React from "react";
import data from "../data/prices.json";
import PricingCard from "./PricingCard";

const PricingStrategy = () => {
  const prices = data.prices;

  return (
    <div className="bg-[#14141c] text-white py-[5%] px-8">
      <div className="text-center mb-[5%]">
        <h2 className="text-4xl font-bold">Our Pricing Strategy</h2>
      </div>
      <div className="flex justify-center space-x-6">
        {prices.map((price, index) => (
          <PricingCard key={index} {...price} />
        ))}
      </div>
    </div>
  );
};

export default PricingStrategy;
