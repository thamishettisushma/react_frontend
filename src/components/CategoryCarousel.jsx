// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer"
// ]

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <>
//                             <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                             </>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel




import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Mobile Developer",
    "DevOps Engineer",
    "Cybersecurity",
    "Cloud Engineer",
];

// Duplicate categories for infinite looping
const repeatedCategories = [...categories, ...categories, ...categories];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-10">
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
                Explore Job Categories
            </h1>
            <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto mt-10">
                <Carousel className="w-full">
                    <CarouselContent className="flex items-center">
                        {repeatedCategories.map((cat, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-4/5 sm:basis-2/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center"
                            >
                                <Button 
                                    onClick={() => searchJobHandler(cat)} 
                                    variant="outline" 
                                    className="rounded-full px-4 py-2 text-sm md:text-base"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* ✅ Adjusted Arrow Positions */}
                    <CarouselPrevious className="absolute -left-3 sm:-left-6 md:-left-10 top-1/2 transform -translate-y-1/2 z-10 
                        bg-white dark:bg-black shadow-md rounded-full p-2 md:p-3 hover:scale-110 transition 
                        text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700" 
                    />
                    <CarouselNext className="absolute -right-3 sm:-right-6 md:-right-10 top-1/2 transform -translate-y-1/2 z-10 
                        bg-white dark:bg-black shadow-md rounded-full p-2 md:p-3 hover:scale-110 transition 
                        text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700" 
                    />
                </Carousel>
            </div>
        </div>
    );

//     return (
//         <div className="relative w-full px-4 md:px-10 lg:px-20 my-10 overflow-hidden p-5">
//             <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
//                 Explore Job Categories
//             </h1>
//             <div className="relative ">
//                 <Carousel className="w-full max-w-5xl mx-auto mt-10">
//                     <CarouselContent className="flex items-center"> {/* Ensure proper alignment */}
//                         {repeatedCategories.map((cat, index) => (
//                             <CarouselItem
//                                 key={index}
//                                 className="basis-4/5 sm:basis-2/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center"
//                                 // className="basis-5/6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center"
//                             >
//                                 <Button 
//                                     onClick={() => searchJobHandler(cat)} 
//                                     variant="outline" 
//                                     className="rounded-full px-4 py-2 text-sm md:text-base"
//                                 >
//                                     {cat}
//                                 </Button>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     {/* Navigation Arrows (Positioned correctly with more space) */}
//                     {/* <CarouselPrevious className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 hover:scale-110 transition" />
//                     <CarouselNext className="absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 hover:scale-110 transition" /> */}

// <CarouselPrevious className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 z-10 
//     bg-white dark:bg-black shadow-md rounded-full p-3 hover:scale-110 transition 
//     text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700" 
// />
// <CarouselNext className="absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 z-10 
//     bg-white dark:bg-black shadow-md rounded-full p-3 hover:scale-110 transition 
//     text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700" 
// />

//                 </Carousel>
//             </div>
//         </div>
//     );
};

export default CategoryCarousel;
