import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "../public/logo.png"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Camera } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
        <div className="flex items-center gap-2">
          
          <Image src={logo} alt="BirdAI" width={32} height={32} className=" border-2 border-green-500 rounded-full"/>
          <span className="text-black font-bold text-xl sm:text-2xl font-nunito gradient gradient-title text-xl">Pluma</span>
          
        </div>
        </Link>
        {/* Login Button */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
            >
              <Button variant="outline">
                <Camera className="w-4 h-4" />
                <span className="hidden md:inline">
                  Snap/Upload</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="secondary"
              className="text-green-500 hover:bg-green-400 hover:text-white transition-colors duration-300 ease-in-out border-dotted border-2 border-green-500 rounded-full" 
              >Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
        </SignedIn>
       </div>
      </div>
    </header>
  )
}


