import Image from "next/image";
import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <main className="w-full pt-[120px]"> {/* padding top for fixed header */}
      <Header />

      {/* 🧑‍⚖️ Banner Image */}
      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Banner image</h1>
      </div>

      {/* 📚 Club History + Success Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-12 gap-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Club history placeholder blurb</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Recent Successes</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>2024 UWaterloo Black and Gold Invitational Champions</li>
            <li>2025 UWestern Invitational Finalists</li>
            <li>.......</li>
          </ul>
        </div>
      </div>

      {/* 🦶 Footer */}
      <footer className="bg-[#1e242e] text-white py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="mb-4 font-bold text-xl">UMTA Logo</div>
            <p>Follow us!</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://instagram.com/uwinmocktrial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold">Questions? Concerns?</p>
            <p>Contact us!</p>
            <p className="mt-1">📧 uwinmocktrial@gmail.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
