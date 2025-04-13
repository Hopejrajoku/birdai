import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-500 text-white px-6 py-6 w-full m-h-screen ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 px-10">
        <p className="text-sm text-center md:text-left font-nunito text-xl">
          © 2025 All Rights Reserved
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 flex gap-4 items-center justify-center md:justify-start"
        >
          <img src="/in.png" alt="LinkedIn" className="w-8 h-8" />
          <img src="/x.png" alt="x" className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}
