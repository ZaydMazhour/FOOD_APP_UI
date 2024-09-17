"use client"
import { ProductType } from "@/app/types/types";
import { pizzas } from "@/data";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  params:{category:string}
}
const CategoryPage = ({params}:Props) => {
  const supabase = createClientComponentClient()
  const [categories, setCategories] = useState<ProductType | any >([]);
  const getCategories = async () => {
    const { data, error } = await supabase.from('Product').select('*').eq('catSlug', params.category);
    setCategories(data as any)
  }
  useEffect(() => {
    getCategories();
  }, [])
  return (
    <div className="flex flex-wrap text-red-500">
      {categories.map((item : any) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
