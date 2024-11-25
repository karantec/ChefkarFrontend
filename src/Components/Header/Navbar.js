import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header class=" bg-white body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FLogo_black_0c2ca67725.webp&w=1920&q=75"
     width="200px" height="300px"/>

     
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="#" class="mr-5 hover:text-gray-900">Our Services</Link>
      <Link to="#" class="mr-5 hover:text-gray-900">Cook Near Me</Link>
      <Link to="#" class="mr-5 hover:text-gray-900">ChefKart से जुड़ें </Link>
      
    </nav>
    <button class="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white text-base mt-4 md:mt-0" jf-ext-button-ct="button">Contact Us
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
      
    </div>
  )
}

export default Navbar
