// import React, { useEffect, useState } from 'react'
// import { Badge } from './ui/badge'
// import { Button } from './ui/button'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';

// const JobDescription = () => {
//     const {singleJob} = useSelector(store => store.job);
//     const {user} = useSelector(store=>store.auth);
//     const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isIntiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
//             if(res.data.success){
//                 setIsApplied(true); // Update the local state
//                 const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
//                 dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
//                 toast.success(res.data.message);

//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     useEffect(()=>{
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchSingleJob(); 
//     },[jobId,dispatch, user?._id]);

//     return (
//         <div className='max-w-7xl mx-auto my-10'>
//             <div className='flex items-center justify-between'>
//                 <div>
//                     <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
//                     <div className='flex items-center gap-2 mt-4'>
//                         <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.postion} Positions</Badge>
//                         <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
//                         <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
//                     </div>
//                 </div>
//                 <Button
//                 onClick={isApplied ? null : applyJobHandler}
//                     disabled={isApplied}
//                     className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>
//             <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
//             <div className='my-4'>
//                 <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
//                 <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
//                 <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
//                 <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
//                 <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
//                 <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
//                 <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
//             </div>
//         </div>
//     )
// }

// export default JobDescription




// import React, { useEffect, useState } from 'react';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';

// const JobDescription = () => {
//     const { singleJob } = useSelector(store => store.job);
//     const { user } = useSelector(store => store.auth);
//     const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isInitiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

//             if (res.data.success) {
//                 setIsApplied(true);
//                 const updatedSingleJob = {
//                     ...singleJob,
//                     applications: [...singleJob.applications, { applicant: user?._id }]
//                 };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || "Something went wrong.");
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
//                 }
//             } catch (error) {
//                 console.error(error);
                
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className="max-w-7xl mx-auto my-10 px-4">
//             {/* Job Title & Apply Button */}
//             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//                 <div>
//                     <h1 className="font-bold text-2xl text-gray-800">{singleJob?.title}</h1>
//                     <div className="flex flex-wrap gap-2 mt-3">
//                         <Badge className="text-blue-700 font-bold" variant="ghost">{singleJob?.postion} Positions</Badge>
//                         <Badge className="text-[#F83002] font-bold" variant="ghost">{singleJob?.jobType}</Badge>
//                         <Badge className="text-[#7209b7] font-bold" variant="ghost">{singleJob?.salary} LPA</Badge>
//                     </div>
//                 </div>
//                 <Button
//                     onClick={isApplied ? null : applyJobHandler}
//                     disabled={isApplied}
//                     className={`rounded-lg px-6 py-2 transition-all text-white ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
//                 >
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>

//             {/* Job Description Section */}
//             <h1 className="border-b-2 border-gray-300 font-medium py-4 text-lg text-gray-700">Job Description</h1>
//             <div className="my-4 space-y-3">
//                 <p><span className="font-bold">Role:</span> <span className="text-gray-700">{singleJob?.title}</span></p>
//                 <p><span className="font-bold">Location:</span> <span className="text-gray-700">{singleJob?.location}</span></p>
//                 <p><span className="font-bold">Description:</span> <span className="text-gray-700">{singleJob?.description}</span></p>
//                 <p><span className="font-bold">Experience:</span> <span className="text-gray-700">{singleJob?.experience} yrs</span></p>
//                 <p><span className="font-bold">Salary:</span> <span className="text-gray-700">{singleJob?.salary} LPA</span></p>
//                 <p><span className="font-bold">Total Applicants:</span> <span className="text-gray-700">{singleJob?.applications?.length}</span></p>
//                 <p><span className="font-bold">Posted Date:</span> <span className="text-gray-700">{singleJob?.createdAt?.split("T")[0]}</span></p>
//             </div>
//         </div>
//     );
// };

// export default JobDescription;





// import React, { useEffect, useState } from 'react';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { ArrowLeft } from 'lucide-react';

// const JobDescription = () => {
//     const { singleJob } = useSelector(store => store.job);
//     const { user } = useSelector(store => store.auth);
//     const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isInitiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

//             if (res.data.success) {
//                 setIsApplied(true);
//                 const updatedSingleJob = {
//                     ...singleJob,
//                     applications: [...singleJob.applications, { applicant: user?._id }]
//                 };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || "Something went wrong.");
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className="max-w-4xl mx-auto my-10 px-6 bg-white shadow-md rounded-lg p-6">
//             {/* Back Button */}
//             <button className="flex items-center text-purple-700 hover:text-purple-900 mb-4" onClick={() => navigate(-1)}>
//                 <ArrowLeft className="w-6 h-6" />
//             </button>

//             {/* Job Title & Apply Button */}
//             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//                 <div>
//                     <h1 className="font-bold text-3xl text-gray-900">{singleJob?.title || 'Job Title'}</h1>
//                     <div className="flex flex-wrap gap-2 mt-3">
//                         <Badge className="text-blue-700 font-bold" variant="ghost">{singleJob?.postion || 1} Positions</Badge>
//                         <Badge className="text-[#F83002] font-bold" variant="ghost">{singleJob?.jobType || 'Full-Time'}</Badge>
//                         <Badge className="text-[#7209b7] font-bold" variant="ghost">{singleJob?.salary || 'N/A'} LPA</Badge>
//                     </div>
//                 </div>
//                 <Button
//                     onClick={isApplied ? null : applyJobHandler}
//                     disabled={isApplied}
//                     className={`rounded-lg px-6 py-2 transition-all text-white ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
//                 >
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>

//             {/* Job Description Section */}
//             <h1 className="border-b-2 border-gray-300 font-medium py-4 text-lg text-gray-700 mt-6">Job Description</h1>
//             <div className="my-4 space-y-3 text-gray-800">
//                 <p><span className="font-bold">Role:</span> {singleJob?.title || 'N/A'}</p>
//                 <p><span className="font-bold">Location:</span> {singleJob?.location || 'N/A'}</p>
//                 <p><span className="font-bold">Description:</span> {singleJob?.description || 'No description available'}</p>
//                 <p><span className="font-bold">Experience:</span> {singleJob?.experience || 0} yrs</p>
//                 <p><span className="font-bold">Salary:</span> {singleJob?.salary || 'N/A'} LPA</p>
//                 <p><span className="font-bold">Total Applicants:</span> {singleJob?.applications?.length || 0}</p>
//                 <p><span className="font-bold">Posted Date:</span> {singleJob?.createdAt ? singleJob.createdAt.split("T")[0] : 'N/A'}</p>
//             </div>
//         </div>
//     );
// };

// export default JobDescription;



import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = {
                    ...singleJob,
                    applications: [...singleJob.applications, { applicant: user?._id }]
                };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            // toast.error(error.response?.data?.message || "Something went wrong.");
            toast.error("Please Login First");

        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="max-w-4xl mx-auto my-10 px-6 py-8 bg-white shadow-lg rounded-xl border border-gray-200">
            {/* Back Button */}
            <button className="flex items-center text-purple-700 hover:text-purple-900 mb-6 transition-all" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-6 h-6 mr-2" />
                <span className="font-medium">Back</span>
            </button>

            {/* Job Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-bold text-3xl text-gray-900">{singleJob?.title || 'Job Title'}</h1>
                    <div className="flex flex-wrap gap-3 mt-3">
                        <Badge className="text-blue-700 font-bold bg-blue-100 px-3 py-1 rounded-md">{singleJob?.position || 1} Positions</Badge>
                        <Badge className="text-[#F83002] font-bold bg-red-100 px-3 py-1 rounded-md">{singleJob?.jobType || 'Full-Time'}</Badge>
                        <Badge className="text-[#7209b7] font-bold bg-purple-100 px-3 py-1 rounded-md">{singleJob?.salary || 'N/A'} LPA</Badge>
                    </div>
                </div>
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg px-6 py-2 transition-all text-white shadow-md ${
                        isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad] hover:shadow-lg'
                    }`}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>

            {/* Job Description Section */}
            <div className="mt-8">
                <h1 className="border-b-2 border-gray-300 font-semibold py-4 text-xl text-gray-800">Job Description</h1>
                <div className="my-4 space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p><span className="font-semibold">Role:</span> {singleJob?.title || 'N/A'}</p>
                    <p><span className="font-semibold">Location:</span> {singleJob?.location || 'N/A'}</p>
                    <p><span className="font-semibold">Description:</span> {singleJob?.description || 'No description available'}</p>
                    <p><span className="font-semibold">Experience:</span> {singleJob?.experience || 0} yrs</p>
                    <p><span className="font-semibold">Salary:</span> {singleJob?.salary || 'N/A'} LPA</p>
                    <p><span className="font-semibold">Total Applicants:</span> {singleJob?.applications?.length || 0}</p>
                    <p><span className="font-semibold">Posted Date:</span> {singleJob?.createdAt ? singleJob.createdAt.split("T")[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;
