import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import herobg from "../public/hero-bg.png";
import Bird from "../public/bird2.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-left lg:bg-center flex items-center justify-center px-6 py-16 pt-40 lg:pt-24 left-0 right-0 xl:pt-24 pb-24"
      style={{
        backgroundImage: `url(${herobg.src})`,
      }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 mt-10">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 ">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl font-bold leading-tight tracking-tight gradient-title gradient font-roboto mt-6 mb-6">
            GET ALL INFO OF YOUR FAVORITE BIRD WITH EASE.
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6 font-nunito text-xl">
            Let our intelligent bird-spotting system help you identify, explore, and learn everything about your feathered friends with just a glance.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/dashboard">
            <Button className="bg-green-600 font-nunito text-xl hover:bg-green-700 text-white text-base md:text-lg px-6 py-4 rounded-[20px] ">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>

        {/* Image & Overlay */}
        <div className="relative w-full sm:w-3/4 lg:w-[35%] h-[300px] max-w-sm">
          <img
            src={Bird.src}
            alt="Bird"
            className="rounded-xl w-full h-full object-cover shadow-xl"
          />

          {/* Top Overlay */}
          <div className="absolute bottom-28 lg:top-[100px] xl:top-[100px] lg:left-[-40px] xl:left-[-40px] ml-2 bg-white rounded-xl p-3 shadow-md flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full" src="/user1.jpg" alt="user" />
              <img className="w-8 h-8 rounded-full" src="/user2.jpg" alt="user" />
              <img className="w-8 h-8 rounded-full" src="/user3.jpg" alt="user" />
            </div>
            <div>
              <p className="text-sm font-bold font-nunito text-[14px] gradient gradient-title">2500+</p>
              <p className="text-xs text-gray-500 font-nunito text-xl">Happy People</p>
            </div>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-4 lg:left-[-40px] bg-white rounded-xl ml-2 p-3 shadow-md flex items-center gap-3">
          <video
            src="/video.mp4"  
            className="w-22 h-14 rounded-md object-cover"
            autoPlay
            muted
            loop
            controls  
            alt="Video"
          />
            <div>
              <p className="text-sm font-semibold font-nunito text-[14px] gradient gradient-title">Smart terrarium</p>
              <p className="text-xs text-gray-500 font-nunito text-xl">Watch Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
