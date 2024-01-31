import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-[#43aa8b] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia Kiev</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Categoria</div>
              <div className='hover:underline'>Produto</div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Navbar