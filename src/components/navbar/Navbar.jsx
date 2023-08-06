"use client"
import Link from 'next/link'
import React from 'react'


const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {
  return (
    <div className = "h-100 flex justify-between items-center">
       <Link href = "/" className = "font-bold text-xl">weiherng2000</Link>
       <div className = "flex items-center gap-5">
          {links.map(link => (
            <Link key = {link.id} href = {link.url}>{link.title}</Link>
          ))}
          <button className = "mt-1 p-4 border-none bg-green-300 text-white cursor-pointer rounded-md "onClick = {() => {console.log("logged out")}}>Logout</button>
       </div>
    </div>
  )
}

export default Navbar
