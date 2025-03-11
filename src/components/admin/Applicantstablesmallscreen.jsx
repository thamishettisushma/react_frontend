import React from "react";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTableSmallScreen = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full px-4 space-y-4">
      {applicants?.applications?.length === 0 ? (
        <h4 className="text-center py-4 text-gray-600 dark:text-gray-400 text-lg font-semibold">
          No applicants found.
        </h4>
      ) : (
        applicants.applications.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">
              <b>Name:</b> {item?.applicant?.fullname || "NA"}
            </h2>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              <b>Email:</b> {item?.applicant?.email || "NA"}
            </h2>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              <b>Contact:</b> {item?.applicant?.phoneNumber || "NA"}
            </h2>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              <b>Date:</b> {item?.applicant?.createdAt?.split("T")[0] || "NA"}
            </h2>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              <b>Resume:</b>{" "}
              {item.applicant?.profile?.resume ? (
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  href={item.applicant.profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.applicant.profile.resumeOriginalName || "Download"}
                </a>
              ) : (
                <span>NA</span>
              )}
            </h2>
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">
                <b>Status:</b> 
                <Badge
                  className={`text-white px-3 py-1 rounded-md ml-2 text-xs ${
                    item?.status === "Rejected"
                      ? "bg-red-500 dark:bg-red-600"
                      : item.status === "Pending"
                      ? "bg-gray-500 dark:bg-gray-600"
                      : "bg-green-500 dark:bg-green-600"
                  }`}
                >
                  {item.status?.toUpperCase() || "PENDING"}
                </Badge>
              </div>
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal className="cursor-pointer text-gray-700 dark:text-gray-300" />
                </PopoverTrigger>
                <PopoverContent className="w-32 p-2 bg-white dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-md">
                  {shortlistingStatus.map((status, index) => (
                    <div
                      key={index}
                      onClick={() => statusHandler(status, item._id)}
                      className="flex items-center py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-2"
                    >
                      <span>{status}</span>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ApplicantsTableSmallScreen;
