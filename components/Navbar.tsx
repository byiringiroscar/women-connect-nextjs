import React from 'react'
import { FaShieldHeart } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <Link href="/">
          <FaShieldHeart />
        </Link>
    </nav>
  )
}

export default Navbar