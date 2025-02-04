import React from 'react'
import tree from "/tree.png"

const Parking = () => {
  return (
    <div className='flex  relative  justify-end  w-full '>
    
        <img src={tree} alt="Tree"  className=' absolute -right-[80px] -top-[300px] h-[300px] w-[300px]'/>
        <div className='absolute font-bold right-[30px]'>Destiny</div>
    </div>
  )
}

export default Parking