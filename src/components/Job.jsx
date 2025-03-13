import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-white dark:bg-black dark:text-white p-5 rounded-lg shadow-lg bg-white border border-gray-200 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto transition-transform hover:scale-105">
      {/* Top Section (Days Ago) */}
      <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm">
        <p>
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-4 my-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={job?.company?.logo} alt={job?.company?.name} />
        </Avatar>
        <div>
          <h1 className="font-semibold text-base sm:text-lg">
            {job?.company?.name}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Description */}
      <div>
        <h1 className="font-bold text-lg sm:text-xl my-2">{job?.title}</h1>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Job Details Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="outline">
          {job?.position} Positions
        </Badge>
        <Badge className="text-red-600 font-bold" variant="outline">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-700 font-bold" variant="outline">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Action Button */}
      <div className="flex justify-start mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Job;
