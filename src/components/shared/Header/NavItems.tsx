'use client';

import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex flex-col items-start gap-3 md:flex-row">
      {navLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500 bg-primary-500/10 hover:bg-primary-500/10'
            } flex p-medium-16 whitespace-nowrap cursor-pointer w-full hover:bg-gray-100 rounded-xl p-2 transition-colors duration-150 ease-in`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems