const PricingCard = ({
  title,
  price,
  quality,
  resolution,
  screens,
  highlighted,
}) => (
  <div
    className={`p-10 h-[596px] w-[360px] text-[12px] bg-[#1f1e24] flex flex-col justify-between text-white rounded-md shadow-md ${
      highlighted && "border-4 border-yellow-300" 
    }`}
  >
    <div className="text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="py-10">
        <div className="mx-[26%] bg-[#e4d804] text-black font-bold py-8 block rounded-lg">
          <span className="text-2xl font-extrabold">${price}</span>
          <span className="text-lg"> Monthly</span>
        </div>
      </div>
    </div>
    <ul className="mb-4 space-y-3">
      <li className="flex justify-between">
        <span>Video quality</span>
        <span className="font-bold text-[#e4d804]">{quality}</span>
      </li>
      <hr/>
      <li className="flex justify-between">
        <span>Resolution</span>
        <span className="font-bold">{resolution}</span>
      </li>
      <hr/>
      <li className="flex justify-between">
        <span>Screens you can watch</span>
        <span className="font-bold">{screens}</span>
      </li>
      <hr/>
      <li>Cancel anytime</li>
      <hr/>
    </ul>
    <div className="flex justify-center">
      <button className="border-[#e4d804] border-2 text-[12px] active:text-black font-bold  rounded-full py-3 px-8 active:bg-yellow-400">
        Buy Now
      </button>
    </div>
  </div>
);

export default PricingCard;
