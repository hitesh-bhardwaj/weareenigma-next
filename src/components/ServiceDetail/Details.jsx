import React from 'react'

const Details = () => {
  return (
    <section className='h-screen w-screen py-[7%]'>
        <div className='w-full h-full px-[4vw]'>
            <div className='w-[55%]'>
        <h2 className='!text-[2.6vw] !font-medium'>Why it matters: User Experience significantly impacts business success.</h2>
        </div>
        <div className='w-full h-full flex items-center justify-between'>
            <div className=' w-1/3 flex flex-col gap-[1vw] items-center text-center'>
                <p className='font-diaplay text-[9.5vw] font-bold leading-[1.2]'>61%</p>
                <p className='text-[1.565vw] font-medium '>More likely to buy</p>
                <p className='text-[1.05vw] font-medium w-[60%]'>61% of customers are more likely to buy from brands they recognize and trust.</p>
            </div>
            <div className=' w-1/3 flex flex-col gap-[1vw] items-center text-center'>
                <p className='font-diaplay text-[9.5vw] font-bold leading-[1.2]'>3.5x</p>
                <p className='text-[1.565vw] font-medium'>More likely to buy</p>
                <p className='text-[1.05vw] font-medium w-[60%]'>61% of customers are more likely to buy from brands they recognize and trust.</p>
            </div>
            <div className=' w-1/3 flex flex-col gap-[1vw] items-center text-center'>
                <p className='font-diaplay text-[9.5vw] font-bold leading-[1.2]'>+23%</p>
                <p className='text-[1.565vw] font-medium'>More likely to buy</p>
                <p className='text-[1.05vw] font-medium w-[60%]'>61% of customers are more likely to buy from brands they recognize and trust.</p>
            </div>

        </div>
        </div>

    </section>
  )
}

export default Details