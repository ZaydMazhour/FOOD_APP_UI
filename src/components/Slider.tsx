"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Découvrez une collection délicieuse conçue pour satisfaire tous les goûts, offrant une variété de saveurs régionales exquises, disponible dès maintenant dans notre application.",
    image: "/fo.png",
  },
  {
    id: 2,
    title: "Explorez une variété infinie de délices personnalisés pour votre cuisine, avec une sélection diversifiée de délices Halal, le tout à portée de main dans notre application",
    image: "/lwalida.png",
  },
  {
    id: 3,
    title: "Découvrez une palette de saveurs exquises conçue pour ravir nos clients. Une collection gastronomique variée, disponible dès maintenant dans notre application.",
    image: "/cl.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-2xl text-center uppercase p-4 md:p-10 md:text-3xl xl:text-3xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 mb-2" onClick={()=>router.push('/menu')}>Commandez maintenant</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 50vw"
        />
      </div>
    </div>
  );
};

export default Slider;
