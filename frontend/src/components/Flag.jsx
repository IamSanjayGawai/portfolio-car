import React from 'react'
import tree from "/tree.png"

const Flag = () => {
  return (
    <div className='flex  relative  justify-start  w-full '>
    
        <img src={tree} alt="Tree"  className=' absolute -left-[50px]  -top-[100px] h-[100px] w-[100px]'/>
        <div className='font-bold'>Start</div>
    </div>
  )
}

export default Flag