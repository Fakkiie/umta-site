"use client";

import React from "react";
import { eventData } from "@/data";

export default function Events() {
  return (
    <main className="w-full pt-40 pb-20 bg-white flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl pt-4 font-serif font-semibold tracking-widest text-center mb-12 text-black">
        Upcoming Events
      </h1>

      <div className="flex flex-col gap-8 w-[90%] md:w-[65%]">
        {eventData.map((event, idx) => (
          <div
            key={idx}
            className="w-full rounded-4xl bg-white/60 backdrop-blur-md p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition hover:scale-[1.02] hover:shadow-[0_12px_36px_rgb(0,0,0,0.2)] border border-transparent"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-2">{event.title}</h2>
            <p className="text-sm md:text-base text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
