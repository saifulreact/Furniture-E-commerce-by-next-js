import Link from 'next/link'
import React from 'react'

const Button = ({tittle,path}) => {
  return (
    <>
    <Link href="/shop" className='mb-[29px] font-primary font-bold text-base text-[#FFFFFF] border-2 border-red-200 border-solid py-6 px-[72px] bg-[#B88E2F] rounded-'>
    {tittle}</Link>
      
    </>
  )
}

export default Button
