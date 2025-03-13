import React from "react";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const Appliedjobssmallscreen = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div className="w-full px-2 space-y-2">
      {allAppliedJobs.length === 0 ? (
        <h4 className="text-center py-4 text-gray-600 dark:text-gray-400 text-lg font-semibold">
          You haven't applied for any jobs yet.
        </h4>
      ) : (
        allAppliedJobs.map((appliedJob) => (
          <div
            key={appliedJob._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2 border border-gray-200  dark:border-gray-700"
          >
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">
              <b>Job Role:</b>{" "}
              {appliedJob.job ? appliedJob.job?.title : "Hiring closed"}
            </h2>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              <b>Company:</b> {appliedJob.job?.company?.name || "N/A"}
            </h2>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              <b>Date:</b> {appliedJob?.createdAt?.split("T")[0]}
            </h2>
            <div className="text-sm font-semibold">
              <b>Status:</b>
              <Badge
                className={`text-white px-3 py-1 rounded-md ml-2 text-xs ${
                  appliedJob?.status === "rejected"
                    ? "bg-red-500 dark:bg-red-600"
                    : appliedJob.status === "pending"
                    ? "bg-gray-500 dark:bg-gray-600"
                    : "bg-green-500 dark:bg-green-600"
                }`}
              >
                {appliedJob.status.toUpperCase()}
              </Badge>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Appliedjobssmallscreen;
