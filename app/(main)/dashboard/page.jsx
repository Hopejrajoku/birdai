"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import Header from "@/components/header";


// app/dashboard/page.jsx
export default function DashboardPage() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Header />
        {/* Main Content */}
        <main className="p-6 flex flex-col justify-center items-center pt-[20vh] ">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold leading-tight tracking-tight gradient-title gradient font-roboto mt-6 mb-2">Dashboard</h2>
          <img src="/logo.png" className="w-24 h-24 mb-2" alt="Bird Icon" />
          <p className="text-center text-gray-600 max-w-sm mb-6">
            Snap or upload a bird photo to identify and learn more.
          </p>
          
          <div className="mt-4 w-full flex">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-16 py-8 rounded-2xl text-lg w-full flex items-center justify-center gap-2">
          <Camera 
           className="w-4 h-4 text-white hover:text-wite transition-colors duration-200"
           />
            Snap or Upload
          </Button>
          </div>
        </main>
    </div>
  );
}
