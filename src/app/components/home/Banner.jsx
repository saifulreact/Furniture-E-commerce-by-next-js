import React from 'react'
import Button from '../Button/Button'

const Banner = () => {
  return (
    
      <section className='py-[150px] bg-[url(/banner.png)] bg-no-repeat bg-center bg-cover'>
        <div className="container">
            <div className='w-1/2 bg-[#FFF3E3] ml-auto pt-[62px] pb-[37px] px-10 rounded-xl'>
                    <h2 className='text-lg font-primary font-semibold  text-[#333333]'>New Arrival</h2>
                    <h1 className='font-primary font-bold text-[52px] pt-1 pb-4 text-[#B88E2F]'>Discover Our New Collection</h1>
                    <p className='font-primary text-[#333333] mb-[46px] font-bold text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Button  tittle="BUY NOW" path="/shop"   />
            </div>
        </div>
      </section>
    
  )
}

export default Banner
