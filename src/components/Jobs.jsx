import React, { useEffect, useState, useRef } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const jobListRef = useRef(null);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
      );
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }

    // Scroll to top when filtering
    if (jobListRef.current) {
      jobListRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-gray-100 bg-white dark:bg-black dark:text-white">
      <Navbar />
      <div className="dark:bg-black dark:text-white max-w-7xl mx-auto mt-5 px-4">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Filter Sidebar */}
          <div className="w-full md:w-1/4">
            <FilterCard />
          </div>

          {/* Job Listings */}
          <div
            className="bg-white dark:bg-black  flex-1 h-[88vh] overflow-y-auto pb-5   "
            ref={jobListRef}
          >
            {filterJobs.length === 0 ? (
              // <span className="text-gray-600">Job not found</span>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/girl-and-man-having-no-job-illustration-download-in-svg-png-gif-file-formats--work-loss-unemployment-layoff-pack-business-illustrations-9093863.png?f=webp"
                className="w-full max-w-[600px] mx-auto mt-24 md:mt-32 lg:mt-40 p-4"
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white dark:bg-black ">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                    className="w-full min-h-[300px] flex flex-col justify-between border border-gray-300 p-4 rounded-lg bg-white"
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
