import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Eye, Trash2 } from "lucide-react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const JobsCardView = () => {
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const navigate = useNavigate();
    const [filterJobs, setFilterJobs] = useState([]);

    useEffect(() => {
        let sortedJobs = [...allAdminJobs].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const filteredJobs = sortedJobs.filter(job =>
            !searchJobByText ||
            job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
            job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
        );

        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    const handleDeleteJob = async (jobId) => {
        try {
            const res = await axios.delete(`${JOB_API_END_POINT}/delete/${jobId}`, {
                withCredentials: true,
            });

            if (res.data.success) {
                toast.success("Job deleted successfully.");
                setFilterJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete job");
        }
    };

    return (
        <div className="w-full px-4 space-y-4">
            {filterJobs.length === 0 ? (
                <h4 className="text-center py-4 text-gray-600 dark:text-gray-400 text-lg font-semibold">
                    No jobs found.
                </h4>
            ) : (
                filterJobs.map((job) => (
                    <div 
                        key={job._id} 
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2 border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-md font-semibold text-gray-900 dark:text-white">
                            <b>Title:</b> {job.title}
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            <b>Company:</b> {job?.company?.name}
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            <b>Created At:</b> {job?.createdAt?.split("T")[0]}
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            <b>Positions:</b> {job?.position}
                        </h2>

                        {/* Actions */}
                        <div className="flex items-center gap-4 mt-2">
                            <button 
                                onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
                            >
                                <Eye className="w-4 h-4" />
                                <span>View Applicants</span>
                            </button>
                            <button 
                                onClick={() => handleDeleteJob(job._id)}
                                className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
                            >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default JobsCardView;
