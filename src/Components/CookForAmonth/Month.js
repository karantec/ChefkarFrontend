import React from 'react'
import FoodBanner from './Banner'
import FaqMonth from './FaqMonth'
import Lower from './Low1'

import Lower2 from './Lowertwo'
import BannerDow from './BannerDow'

import Carousel1 from './Slider2'

const Month = () => {
  return (
    <div>
      <Carousel1 />
      <BannerDow/>
      <Lower2/>
      <Lower/>
      <FaqMonth/>
      <FoodBanner/>
    </div>
  )
}

export default Month
