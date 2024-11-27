import React from 'react'
import ShowCard from './ShowCard'

const BannerDow = () => {
  return (
    <div>
        <section className="text-orange-600  bg-slate-200 body-font">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r  font-bold  md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-orange-500">
      <h4 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-orange-500">Why choose ?</h4>
      <h1 className="leading-relaxed  text-5xl font-bold text-black">Cook for a Month</h1>
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="title-font text-gray-800 tracking-wider text-2xl mb-3">Try the service for a minimal trial amount and, if satisfied, get the same cook appointed for a month.</h2>
    </div>
  </div>
  <ShowCard/>
</section>

    </div>
  )
}

export default BannerDow