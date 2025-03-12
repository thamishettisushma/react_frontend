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
import Navbar from './shared/Navbar';

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
        <>
       
        <Navbar/>
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
                    {isApplied ? ' Applied' : 'Apply Now'}
                </Button>
            </div>

            {/* Job Description Section */}
            <div className="mt-8">
                <h1 className="border-b-2 border-gray-300 font-semibold py-4 text-xl text-gray-800">Job Description</h1>
                <div className="my-4 space-y-4 text-gray-700 text-lg leading-relaxed text-justify">
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
        </>
    );
};

export default JobDescription;
