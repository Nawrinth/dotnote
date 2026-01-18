import React from 'react'

const Trending = () => {
    return (
        <div>
            <h1 className=' mt-10 text-2xl font-bold opacity-80'>
                Trending Stories
            </h1>
            <div className='w-full mt-10  flex flex-col lg:flex-row gap-10'>
                {/* One Trending  */}
                <div className='flex-1 lg:flex-2/4 '>
                    {/* IMAGE  */}
                    <div className='w-full aspect-video bg-red-500'>
                        <img src="https://blog.bedandbreakfast.eu/wp-content/uploads/2019/12/iStock-545556770.jpg" className='w-full h-full object-cover' alt="" />
                    </div>

                    {/* USER AND DATE  */}
                    <div className='font-semibold text-sm mt-4 flex gap-2 opacity-80'>
                        <h1 className=''>{"Jon Snow"}</h1>
                        <p>●</p>
                        <h1>{"12 Jan 2025"}</h1>
                    </div>

                    {/* HEADING  */}
                    <div className='mt-5'>
                        <h1 className='text-3xl font-bold'>1. Bold Vision, Truly Timeless Style</h1>
                    </div>

                    {/* DESCRIPTION  */}
                    <div className='mt-2 '>
                        <p className='opacity-80 leading-7 line-clamp-3'>Master the art of micro-storytelling. We combine bold visual modeling with brief, impactful prose to create worlds in five words.</p>
                    </div>

                    {/* CATEGORY  */}
                    <div className='flex gap-4 mt-4'>
                        <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                            Fashion
                        </div>

                        <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                            Modelling
                        </div>
                    </div>


                </div>
                <div className='flex-1 flex flex-col lg:flex-2/4 gap-10'>
                    {/* TRENDING NO 2  */}
                    <div className='flex gap-2 w-full'>
                        <div className='min-w-1/2 aspect-video bg-red-500 flex gap-4'>
                            <img src="https://img.freepik.com/premium-photo/close-up-young-asian-woman-using-laptop-cafe-while-working-remotely-elegant-wooden-interior-copy-space_236854-36318.jpg" className='w-full h-full' alt="" />

                        </div>
                        <div>
                            {/* USER AND DATE  */}
                            <div className='font-semibold text-sm flex gap-2 opacity-80'>
                                <h1 className=''>{"Jon Snow"}</h1>
                                <p>●</p>
                                <h1>{"12 Jan 2025"}</h1>
                            </div>

                            {/* HEADING  */}
                            <div className='mt-2'>
                                <h1 className='text-lg font-bold'>2. The Pulse of Modern Work.</h1>
                            </div>

                            {/* DESCRIPTION  */}
                            <div className='mt-2'>
                                <p className='opacity-80 leading-7 line-clamp-3 '>Exploring the synergy between neural architectures and workplace culture, where advanced AI modeling meets the human stories of modern offices.</p>
                            </div>

                            {/* CATEGORY  */}
                            <div className='flex gap-4 mt-4'>
                                <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                                    Fashion
                                </div>

                                <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                                    Modelling
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* TRENDING NO 3  */}
                    <div className='flex gap-2 w-full'>
                        <div className='min-w-1/2 aspect-video bg-red-500'>
                            <img src="https://cdn.trendir.com/wp-content/uploads/2017/05/Beach-Cottage-House.jpg" className='w-full h-full' alt="" />
                        </div>
                        <div>
                            {/* USER AND DATE  */}
                            <div className='font-semibold text-sm flex gap-2 opacity-80'>
                                <h1 className=''>{"Jon Snow"}</h1>
                                <p>●</p>
                                <h1>{"12 Jan 2025"}</h1>
                            </div>

                            {/* HEADING  */}
                            <div className='mt-2'>
                                <h1 className='text-lg font-bold'>3. Quiet Spaces for Peaceful Living.</h1>
                            </div>

                            {/* DESCRIPTION  */}
                            <div className='mt-2'>
                                <p className='opacity-80 leading-7 line-clamp-3 '>Cultivate serenity through mindful design and architectural harmony, creating a digital sanctuary where peace, home, and modern tranquility perfectly intersect.</p>
                            </div>

                            {/* CATEGORY  */}
                            <div className='flex gap-4 mt-4'>
                                <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                                    Fashion
                                </div>

                                <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                                    Modelling
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* TRENDING NO 4  */}
                    <div className='flex gap-2 w-full'>
                        <div className='min-w-1/2 aspect-video bg-red-500'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxK76GPEy4G2a2TV10oWDhE2HZQxSTHPhrQ&s" className='w-full h-full object-cover' alt="" />
                        </div>
                        <div>
                            {/* USER AND DATE  */}
                            <div className='font-semibold text-sm flex gap-2 opacity-80'>
                                <h1 className=''>{"Jon Snow"}</h1>
                                <p>●</p>
                                <h1>{"12 Jan 2025"}</h1>
                            </div>

                            {/* HEADING  */}
                            <div className='mt-2'>
                                <h1 className='text-lg font-bold'>4. Quiet Spaces for Peaceful Living.</h1>
                            </div>

                            {/* DESCRIPTION  */}
                            <div className='mt-2'>
                                <p className='opacity-80 leading-7 line-clamp-3 '>Cultivate serenity through mindful design and architectural harmony, creating a digital sanctuary where peace, home, and modern tranquility perfectly intersect.</p>
                            </div>

                            {/* CATEGORY  */}
                            <div className='flex gap-4 mt-4'>
                                <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                                    Fashion
                                </div>

                                <div className='rounded-full border border-foreground py-1 text-sm px-4'>
                                    Modelling
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Trending