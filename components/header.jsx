import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "../public/logo.png"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="BirdAI" width={32} height={32} className=" border-2 border-green-500 rounded-full"/>
          <span className="text-black font-bold text-xl sm:text-2xl font-nunito gradient gradient-title text-xl">BirdAI</span>
        </div>

        {/* Login Button */}
        <Button
          variant="secondary"
          className="bg-green-500 text-white font-semibold px-4 py-2 text-sm sm:text-base font-nunito text-xl hover:bg-gray-100 transition duration-300 ease-in-out rounded-md shadow-md"
        >
          Login
        </Button>
      </div>
    </header>
  )
}
