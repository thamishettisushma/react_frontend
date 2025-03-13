import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-lg bg-white border border-gray-200 cursor-pointer 
                       w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto transition-transform 
                       hover:scale-105 duration-300 bg-white dark:bg-black"
    >
      {/* Company Info */}
      <div>
        <h1 className="font-medium text-base md:text-lg">
          {job?.company?.name}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">India</p>
      </div>

      {/* Job Details */}
      <div>
        <h1 className="font-bold text-lg md:text-xl my-2">{job?.title}</h1>
        <p className="text-sm md:text-base text-gray-600 truncate">
          {job?.description}
        </p>
      </div>

      {/* Job Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
