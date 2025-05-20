import Image from "next/image";
import { landingPageData } from "@/data";

export default function LandingPage() {
  return (
    <main className="w-full pt-[7.5rem] min-h-screen bg-black text-white">
      {/* banner image */}
      <div className="w-full h-[25rem]">
        <Image
          src={landingPageData.bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* content section */}
      <div className="flex flex-col md:flex-row justify-between px-[1.5rem] md:px-[5rem] mt-[2rem] py-[3rem] gap-[3rem]">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-[1rem]">
            {landingPageData.clubHistory.title}
          </h2>
          <p className="text-gray-300">
            {landingPageData.clubHistory.text}
          </p>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-[1rem]">
            {landingPageData.successes.title}
          </h2>
          <ul className="list-disc ml-[1.5rem] text-gray-300 space-y-[0.5rem]">
            {landingPageData.successes.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>

  );
}
