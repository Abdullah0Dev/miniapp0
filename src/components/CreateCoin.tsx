import React from "react";
import home from "../assets/index";

const CreateCoin = () => {
  return (
    <div className="bg-coin w-full h-full bg-cover">
      <div className="flex w-full mx-8 py-6 items-start gap-x-6 justify-start">
        <img src={home.box} alt="box" className="w-14 h-14 object-contain" />
        <div>
          <img
            src={home.searchField}
            className="w-64 object-contain"
            alt="search"
          />
        </div>
      </div>
      {/* Create Coin */}
      <div className="bg-white  rounded-sm mx-5  py-5 flex items-center justify-center">
        <p>Create a Coin</p>
      </div>
  {/* Coins Created and Volume Section */}
  <div className="flex justify-around pt-5 mx-5 gap-x-4">
        {/* Coins Created */}
        <div className="bg-white p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
          <p className="font-bold text-[11px] mb-2">Coins Created</p>
          <div className="flex items-center">
            {/* Multiple Coin Icons */}
            <div className="flex -space-x-2">
              <img
                src={home.coin} // Replace with your coin icons
                alt="coin1"
                className="w-8 h-8 object-contain"
              />
              <img
                src={home.coin} // Replace with your coin icons
                alt="coin2"
                className="w-8 h-8 object-contain"
              />
              <img
                src={home.coin} // Replace with your coin icons
                alt="coin3"
                className="w-8 h-8 object-contain"
              />
            </div>
            <p className="ml-2 font- text-xs">+938</p>
          </div>
        </div>

        {/* Volume */}
        <div className="bg-white p-4 rounded-lg flex flex-col items-center w-1/2 border-2 border-blue-100">
          <p className="text-[11px] mb-2">Volume</p>
          <p className="text-green-500 font-bold text-md">+45.83MIO</p>
        </div>
      </div>

         
      {/* Tokens Map */}
      <div className="bg-white mx-5 my-5 p-4 rounded-lg">
        <div className="grid grid-cols-3 text-sm text-left px-2 py-2 border-b border-gray-200">
          <p>Token</p>
          <p>Price</p>
          <p>Volume</p>
        </div>

        {tokenData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center px-2 py-3 border-b border-gray-100"
          >
            <div className="flex items-center gap-x-2 pr-8">
              <img
                src={home.coin}
                alt="token"
                className="w-8 h-8 object-contain"
              />
              <p className="text-[13px]">{item.token}</p>
            </div>
            <p className="text-[13px]">${item.price.toFixed(2)}</p>
            <p className="text-green-400  text-[13px] ">{item.volume.toFixed(2)}M</p>
          </div>
        ))}
      </div>
      <img src={home.btm} alt="btm" className="w-full" />
    </div>
  );
};

export default CreateCoin;

const tokenData = [
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 },
  { token: "JONI", price: 0.83, volume: 17.83 }
];
