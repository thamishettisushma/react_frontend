// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection




import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="text-center px-4 bg-white dark:bg-black dark:text-white p-4 ">
            <div className="flex flex-col gap-5 my-10 max-w-4xl mx-auto">
                {/* Highlighted Badge */}
                <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base">
                    No. 1 Job Hunt Website
                </span>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
                    Search, Apply & <br />
                    Get Your <span className="text-[#6A38C2]">Dream Job</span>
                </h1>

                {/* Subtitle */}
                <h4 className="text-gray-600 text-sm md:text-base">
                    Find the perfect job that fits your skills and passion.
                </h4>

                {/* Search Bar */}
                <div className="flex w-full max-w-lg md:max-w-2xl lg:max-w-3xl shadow-lg border border-gray-200 px-3 py-2 rounded-full items-center gap-4 mx-auto mt-5">
                    <input
                        type="text"
                        placeholder="Find your dream job"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchJobHandler();
                            }
                        }}
                        className="outline-none border-none w-full text-sm md:text-base px-2 dark:bg-black dark:text-white"
                    />
                    <Button onClick={searchJobHandler} className="rounded-full bg-[#6A38C2] px-4 py-2">
                        <Search className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

