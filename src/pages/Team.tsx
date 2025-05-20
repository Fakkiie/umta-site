"use client";

import React from "react";
import TeamCard from "@/components/TeamCard";
import { teamData } from "@/data";
import Image from "next/image";
import exec from "@/assets/exec.jpg";

export default function Teams() {
  return (
    <main className="w-full pt-[7.5rem] pb-[5%] bg-white min-h-screen">
      
      {/* 📸 Exec Banner Image */}
      <div className="relative w-full h-[16rem] mt-[1.5rem]">
        <Image
          src={exec}
          alt="Executive Team Banner"
          fill
          priority
          className="image-top-crop"
        />
      </div>

      {/* 🔻 Clean Black Divider */}
      <hr className="w-[80%] mx-auto border-t border-black/10 my-6" />

      {/* 👥 Team Grid */}
      <section className="w-full flex justify-center mt-4">
        <div className="w-[90%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[4rem] gap-x-[2.5rem] text-black">
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
