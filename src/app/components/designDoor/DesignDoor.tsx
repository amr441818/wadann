import React from 'react'
import Container from '../shared/container'

const DesignDoor = () => {
  return (
    <div className='mt-[120px]'>

<Container>


    <div className='grid grid-cols-12 gap-4'>
       <div className="flex col-span-3">
        right
       </div>

       <div className="flex col-span-9">
        left
       </div>

    </div>
</Container>

    </div>
  )
}

export default DesignDoor