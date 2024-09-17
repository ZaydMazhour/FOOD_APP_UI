"use client"
import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
import { useRouter } from "next/navigation";

const Offer = () => {
  const router = useRouter();
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[65vh]">

      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-11">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Économisez sur vos produits préférés</h1>
        <p className="text-white xl:text-xl">

          Economisez du temps et de l&apos;argent en souscrivant à notre plateforme
          - jusqu&apos;à -15% sur vos produits préférés
          - une livraison gratuite et automatique
          - sans engagement et sans frais
        </p>

        <button className="bg-red-500 text-white rounded-md py-3 px-6" onClick={() => router.push('/menu')}>Commandez maintenant</button>
      </div>

      <div className="flex-1 w-full relative md:h-full flex justify-end ">
        <Image
          src="https://res.cloudinary.com/zaydm/image/upload/v1703877551/restaurant/qphzowsvfwp8gwgeap16.jpg"
          alt=""
          width={400} // Set an appropriate width based on your design
          height={400} // Set an appropriate height based on your design
          objectFit="contain"
          objectPosition="left center"
        />
      </div>


    </div>
  );
};

export default Offer;
