import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import Appliedjobssmallscreen from "./Appliedjobssmallscreen";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black-100 dark:bg-black-900 dark:text-white px-4 sm:px-0">
      <Navbar />
      <div className="max-w-4xl mx-4 sm:mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl my-5 p-4 sm:p-6 md:p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full relative w-fit mx-auto  ">
            <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
              <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />

              <button
                onClick={() => setOpen(true)}
                className="absolute -top-0 -right-0 bg-white p-1.5 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Pen className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </Avatar>
            {/* Edit Button Positioned on Avatar */}

            <div className="text-center sm:text-left w-full">
              <h1 className="font-medium text-lg sm:text-xl">
                {user?.fullname}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {user?.profile?.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            {/* <Mail /> */}
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-8">
            {/* <Contact /> */}
            <Contact className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-sm sm:text-base font-semibold">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {user?.profile?.skills.length ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="text-black text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-300 flex items-center justify-center px-3 py-1 uppercase"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400">NA</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="my-5 mt-8">
          <Label className="text-md font-bold dark:text-white mr-5">
            Resume
          </Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user?.profile?.resume}
              className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer break-all text-sm sm:text-base"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="max-w-4xl mx-4 sm:mx-auto bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8">
        <h1 className="font-bold text-lg sm:text-xl my-5 dark:text-white">
          Applied Jobs
        </h1>
        {isSmallScreen ? <Appliedjobssmallscreen /> : <AppliedJobTable />}
      </div>

      {/* Update Profile Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
