"use client"
import { useEffect } from 'react'
import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "H" || e.key === "h") {
        router.push('/');
      }
      if (e.key === "P" || e.key === "p") {
        router.push('/projects');
      }
      if (e.key === "E" || e.key === "e") {
        router.push('/experience');
      }
      if (e.key === "R" || e.key === "r") {
        window.open("/resume", "_blank");
      }

    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

  })

  return (
    <div className="font-mono fixed z-10 border-3 rounded-xl border-[#C1AFFF] text-[#4a4a4a] h-[63px] lg:w-[800px] sm:w-[95%] sm:overflow-x-scroll lg:overflow-hidden whitespace-nowrap mt-5 flex justify-evenly gap-15 items-center leading-[63px] bg-white text-[80%] drop-shadow-sm">
      <Link href={'/'}>
        [H] Home
      </Link>

      <Link href={'/projects'}>
        [P] Projects
      </Link>

      <Link href={'/experience'}>
        [E] Experience
      </Link>

      <Link href={'/resume'} target="_blank">
        [R] Resume
      </Link>
    </div>
  )
}
