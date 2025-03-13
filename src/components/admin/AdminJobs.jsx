import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";
import JobsCardView from "./Adminjobscards";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [input, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10 px-4">
        {/* Search & Button Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-5">
          <Input
            className="w-full sm:w-auto"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className="w-full sm:w-auto" onClick={() => navigate("/admin/jobs/create")}>
            New Job
          </Button>
        </div>
        {/* Jobs Table */}
        
      
        {isSmallScreen ? <JobsCardView /> : <AdminJobsTable />}
   
      </div>
    </div>
  );
};

export default AdminJobs;
