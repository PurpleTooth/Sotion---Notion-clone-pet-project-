import React from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
})
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/logo.svg"}
        alt="Logotype"
        height={40}
        width={40}
        className="dark:hidden"
      />
      <Image
        src={"/logo-dark.svg"}
        alt="Logotype"
        height={40}
        width={40}
        className="dark:block hidden"
      />
      <p className={cn("font-semibold", font.className)}> Sotion</p>
    </div>
  )
}

export default Logo
