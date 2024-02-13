import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
       <nav className="py-5 px-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <HeartIcon className="inline-block w-8 h-8 text-red-500 mr-2" />
          Crush Connect
        </h1>
        <div className="space-x-4">
          <Link className="text-white hover:text-gray-200" href="#">
            Home
          </Link>
          <Link className="text-white hover:text-gray-200" href="#">
            Credits
          </Link>
          <Link className="text-white hover:text-gray-200" href="#">
            Statistics
          </Link>
          {/* <ShoppingCartIcon className="inline-block w-6 h-6" /> */}
        </div>
      </nav>
   </>
  )
}


function HeartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
  
  
  function ShoppingCartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  
  

export default Navbar