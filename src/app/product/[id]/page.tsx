"use client"
import { ProductType } from "@/app/types/types";
import Price from "@/components/Price";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";


type Props = {
  params:{id:string}
}
const productPage = ({params}:Props) => {
  const supabase = createClientComponentClient()
  const [product, setProduct] = useState<ProductType | any >([]);
  const getproduct = async () => {
    const { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('id', params.id)
    .single();
    setProduct(data)
  }
  useEffect(() => {
    getproduct();
  }, [])
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={product.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{product.title}</h1>
        <p>{product.desc}</p>
        <Price price={product.price} id={product.id} options={product.options}/>
      </div>
    </div>
  );
};

export default productPage;
