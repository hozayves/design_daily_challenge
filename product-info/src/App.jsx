import { useState } from "react";
import "./App.css";
import productImage from "./assets/product.png";

function App() {
  return (
    <section className="min-w-full rounded-[0.9375rem] bg-white shadow-cardShadow flex-shrink flex flex-col justify-center items-center gap-4 md:w-[600px] lg:flex-row lg:h-[450px] lg:w-[700px] lg:p-6">
      <div className="h-auto w-full flex justify-center items-center px-6 py-2 lg:p-0 lg:h-full lg:items-start lg:basis-5/12">
        <img className="w-full h-[300px] md:w-[80%] md:h-[380px] lg:w-[250px] lg:h-[250px]" src={productImage} alt="" />
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-3 p-6 lg:p-0 lg:basis-[59.5%]">
        <div className=" w-full flex justify-between items-center lg:mb-3">
          <span className="px-[0.5rem] py-[0.25rem] inline-flex items-start gap-[0.625rem] rounded-[1.25rem] bg-blue text-white leading-normal font-semibold text-sm font-Poppins not-italic md:text-base md:px-[0.9rem] md:py-[0.50rem] lg:text-sm lg:px-[0.5rem] lg:py-[0.25rem]">
            Free shipping
          </span>
          <ion-icon size="large" name="heart-outline"></ion-icon>
        </div>
        <h1 className="text-blue font-Poppins text-2xl not-italic font-semibold leading-normal md:text-3xl md:w-[90%] lg:w-full lg:text-2xl">
          Razer Kraken Kitty Edt Gaming Headset Quartz
        </h1>
        <div className="flex flex-col w-full h-32 relative">
          <span className="text-blue font-Roboto text-lg not-italic leading-normal line-through absolute top-0">
            1.599
          </span>
          <span className="text-blue font-Poppins text-5xl not-italic font-bold leading-normal absolute top-3">
            $799
          </span>
          <p className="text-blue font-Poppins text-sm not-italic font-normal leading-normal opacity-60 bottom-0 absolute md:text-base">
            The offer is valid until April 3 or as long as stock lasts!
          </p>
        </div>
        <div className="flex gap-2 mt-5 justify-center items-center">
          <div className="w-4 h-4 bg-[#00D98B] rounded-full">.</div>
          <span className="text-[#000] font-Poppins text-sm not-italic font-medium leading-normal md:text-base">
            50+pcs.in stock.
          </span>
        </div>
        <button className="flex p-4 justify-center items-center gap-[0.625rem] self-stretch rounded-lg bg-[#4788E9] shadow-buttonShadow text-white font-Poppins font-medium text-lg md:text-2xl lg:text-lg">
          <ion-icon size="large" name="cart-outline"></ion-icon> Add to cart
        </button>
      </div>
    </section>
  );
}

export default App;
