"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useCartStore } from "../utils/store";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart  , clearCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  //  clearCart();
  if(totalItems === 0){
    clearCart();
  }
  }, []);

  const handleCheckout = async () => {
  };

  return (
    <div className="pt-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x  {item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">Є {item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div  className="h-1/2 p-2 bg-fuchsia-50  flex flex-col gap-2 justify-center lg:h-full lg:w-1/3 2xl:w-1/3 lg:px-2 xl:px-20 2xl:text-xl 2xl:gap-2">
        <div  className="flex justify-between">
          <span className="">Sub-total({totalItems}items)</span>
          <span className="">Є{totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Coût du service</span>
          <span className="">Є 0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Coût de la livraison</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">Totale (INCL. VAT)</span>
          <span className="font-bold">Є{totalPrice}</span>
        </div>
        <button
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
          onClick={handleCheckout}
          disabled={totalItems === 0}
        >
          Commander
        </button>
      </div>
    </div>
  );
};

export default CartPage;
