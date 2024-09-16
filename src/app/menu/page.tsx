"use client"
import { menu } from "@/data";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img: string;
  color: string;
}[];




const MenuPage = () => {
  const supabase = createClientComponentClient()
  const [categories, setCategories] = useState<MenuType>([]);
  const getCategories = async () => {
    const { data, error } = await supabase.from("Category").select("*")
    setCategories(data as any)
  }
  useEffect(() => {
    getCategories();
  }, [])
  return (
    <div className="pt-7 lg:px-20 xl:px-40 h-auto md:h-[calc(110vh)] md:w-full items-center " style={{}}>
      <div className="flex flex-col md:flex-row w-full">
        {categories.slice(0, 2).map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full md:w-1/2 md:mr-1 md:mb-1 relative"
            style={{ height: 300 }}
          >
            <div className={`text-${category.color} w-full h-full relative`}>
              <Image
                src={category.img}
                alt={category.title}
                fill
                objectFit="cover"
                blurDataURL={category.img}
                placeholder="empty"

              />

              <div className="absolute  w-3/4 h-full flex flex-col  ">
                <h1 className="uppercase font-bold text-2xl px-14 pt-10">{category.title}</h1>
                <p className="text-sm my-4 px-14">{category.desc}</p>
                <button
                  className={`block md:hidden bg-${category.color} text-${category.color === "black" ? "white" : "red-500"
                    } py-2 px-2 rounded-md mb-4 mx-14 w-20`}
                >
                  Explore
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full">
        {categories.slice(2, 4).map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full md:w-1/2 md:mr-1 md:mb-1 relative"
            style={{ height: 300 }}
          >
            <div className={`text-${category.color} w-full h-full relative`}>
              <Image
                src={category.img}
                alt={category.title}
                fill
                objectFit="cover"
                blurDataURL={category.img}
                placeholder="empty"
              />
              <div className="absolute  w-3/4 h-full flex flex-col  ">
                <h1 className="uppercase font-bold text-2xl px-14 pt-10">{category.title}</h1>
                <p className="text-sm my-4 px-14">{category.desc}</p>
                <button
                  className={`block md:hidden bg-${category.color} text-${category.color === "black" ? "white" : "red-500"
                    } py-2 px-2 rounded-md mb-4 mx-14 w-20`}
                >
                  Explore
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
