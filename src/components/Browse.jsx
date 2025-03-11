// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';

// // const randomJobs = [1, 2,45];

// const Browse = () => {
//     useGetAllJobs();
//     const {allJobs} = useSelector(store=>store.job);
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         return ()=>{
//             dispatch(setSearchedQuery(""));
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10'>
//                 <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {
//                         allJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job}/>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Browse


// Browse 2

// import React, { useEffect } from 'react';
// import Navbar from './shared/Navbar';
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';

// const Browse = () => {
//     useGetAllJobs();
//     const { allJobs } = useSelector(store => store.job);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         return () => {
//             dispatch(setSearchedQuery(""));
//         };
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <Navbar />
//             <div className="max-w-7xl mx-auto my-10 px-4">
//                 <h1 className="font-bold text-xl my-5 text-gray-800">
//                     Search Results ({allJobs.length})
//                 </h1>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {allJobs.map((job) => (
//                         <div key={job._id} className="w-full">
//                             <Job job={job} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Browse;



import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { ArrowLeft } from 'lucide-react';
import {useNavigate} from "react-router-dom"

const Browse = () => {
    useGetAllJobs();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { allJobs, searchedQuery } = useSelector(store => store.job);

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery("")); // Clear search query when leaving the page
        };
    }, [dispatch]);

    // Filter jobs based on search query
    const filteredJobs = searchedQuery
        ? allJobs.filter(job =>
              job.title.toLowerCase().includes(searchedQuery.toLowerCase())
          )
        : allJobs; // If no search query, show all jobs

    return (
        <div className="bg-white dark:bg-black min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <div className="flex-grow w-full max-w-7xl mx-auto my-10 px-4">
            <button className="flex items-center text-purple-700 hover:text-purple-900 mb-6 transition-all" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-6 h-6 mr-2" />
                <span className="font-medium">Back</span>
            </button>
                {filteredJobs.length > 0 ? (
                    <div 
                        className={`grid w-full gap-6
                            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                            ${filteredJobs.length === 1 ? "flex justify-center" : ""} // Center single item
                        `}
                    >
                        {filteredJobs.map((job) => (
                            <div key={job._id} className="flex justify-center">
                                <Job job={job} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                        {/* <p className="text-gray-600 text-lg font-semibold text-center">
                            Jobs not found
                        </p> */}
                        {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-and-man-having-no-job-illustration-download-in-svg-png-gif-file-formats--work-loss-unemployment-layoff-pack-business-illustrations-9093863.png?f=webp" className='h-100 w-100 mt-100 p-10'/> */}
                        <img 
  src="https://cdni.iconscout.com/illustration/premium/thumb/girl-and-man-having-no-job-illustration-download-in-svg-png-gif-file-formats--work-loss-unemployment-layoff-pack-business-illustrations-9093863.png?f=webp" 
  className="w-full max-w-[600px] mx-auto mt-24 md:mt-32 lg:mt-40 p-4"
/>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Browse;

