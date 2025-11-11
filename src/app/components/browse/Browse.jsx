import React from 'react'
import Image from "next/image";


const Browse = () => {
  return (
    <>
        <section className='py-14'>
            <div className="container">
                <div className='pb-16'>
                    <div className="tittle">
                        <h2 className='tittle text-center'>Browse The Range</h2>
                    <p className='details text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         </div>

                         <div  className='flex gap-5 mt-[62px]'>
                            <div className='w-1/3'>
                                <Image 
                                src="/dinner.png"
                                width={380}
                                height={480}
                                alt='dinner_iamges'
                                />
                                <p className='font-primary font-semibold text-[24px] text-[#333333] text-center mt-5' >Dining</p>
                            </div>
                            <div className='w-1/3'>
                                <Image 
                                src="/living.png"
                                width={380}
                                height={480}
                                alt='dinner_iamges'
                                />
                            <p className='font-primary font-semibold text-[24px] text-[#333333] text-center mt-5' >Dining</p>

                            </div>
                            <div className='w-1/3'>
                                <Image 
                                src="/bedroom.png"
                                width={380}
                                height={480}
                                alt='dinner_iamges'
                                />
                     <p className='font-primary font-semibold text-[24px] text-[#333333] text-center mt-5' >Dining</p>

                            </div>
                         </div>


                   
                  
                </div>
            </div>
        </section>
    </>
  )
}

export default Browse
