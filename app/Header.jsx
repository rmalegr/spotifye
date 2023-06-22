
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-5 bg-blue-500  '>
      <Link href={"/"} className='px-2 py-1 bg-white text-blue-400 rounded-sm'>
        Home
      </Link>
    </header>
  )
}

export default Header