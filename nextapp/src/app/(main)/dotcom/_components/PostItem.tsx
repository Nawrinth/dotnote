import React from 'react'

const PostItem = () => {
  return (
    <div className='w-full '>
      <div className='w-full h-full flex flex-col lg:flex-row gap-4'>
        {/* IMAGE  */}
        <img src="https://blog.bedandbreakfast.eu/wp-content/uploads/2019/12/iStock-545556770.jpg" className='lg:w-1/3  aspect-video object-cover' alt="" />

        {/* DETAILS  */}
        <div className='flex lg:w-2/3  flex-col gap-2'>
          {/* TOPIC  */}
          <div>
            <h1 className='font-bold text-3xl'>Bold Vision, Truly Timeless Style</h1>
          </div>

          {/* AUTHOR AND TIME  */}
          <div>
            <p className='text-xs font-medium opacity-80'>By <span className='text-purple-400'>Jon Snow</span> at <span className='font-normal'>Jan 12 2025</span></p>
          </div>

          {/* DESCRIPTION  */}
          <div>
            <p className='opacity-80 leading-7 line-clamp-4 mt-2'>Explore the intersection of high-fidelity visual modeling and intentional storytelling. "Bold Vision, Truly Timeless Style" redefines how we perceive modern aesthetics, blending digital precision with human emotion to create a sanctuary of design that remains impactful long after the trends fade.</p>
          </div>

          {/* CATEGORY  */}
          <div className='mt-4 flex gap-4'>
              <div className='px-3 w-fit py-1 rounded-full border border-foreground/80'>
                  <p className='text-xs'>Beauty</p>
              </div>
              <div className='px-3 w-fit py-1 rounded-full border border-foreground/80'>
                  <p className='text-xs'>Fashion</p>
              </div>
          </div>

          <div className='mt-2'>
            <p className='text-xs underline font-semibold cursor-pointer hover:opacity-80'>Read More</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PostItem