// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const AdminJobsTable = () => { 
//     const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

//     const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//     const navigate = useNavigate();

//     useEffect(()=>{ 
//         console.log('called');
//         const filteredJobs = allAdminJobs.filter((job)=>{
//             if(!searchJobByText){
//                 return true;
//             };
//             return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

//         });
//         setFilterJobs(filteredJobs);
//     },[allAdminJobs,searchJobByText])
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent  posted jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Company Name</TableHead>
//                         <TableHead>Role</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterJobs?.map((job) => (
//                             <tr>
//                                 <TableCell>{job?.company?.name}</TableCell>
//                                 <TableCell>{job?.title}</TableCell>
//                                 <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                                 <Edit2 className='w-4' />
//                                                 <span>Edit</span>
//                                             </div>
//                                             <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
//                                                 <Eye className='w-4'/>
//                                                 <span>Applicants</span>
//                                             </div>
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </tr>

//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default AdminJobsTable





// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, Eye, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const AdminJobsTable = () => {
//   const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredJobs = allAdminJobs.filter((job) => {
//       if (!searchJobByText) return true;
//       return (
//         job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
//         job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
//       );
//     });
//     setFilterJobs(filteredJobs);
//   }, [allAdminJobs, searchJobByText]);

//   return (
//     <div className="overflow-x-auto">
//       <Table className="min-w-full">
//         <TableCaption>A list of your recently posted jobs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Company Name</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterJobs?.map((job) => (
//             <TableRow key={job._id}>
//               <TableCell>{job?.company?.name}</TableCell>
//               <TableCell>{job?.title}</TableCell>
//               <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//               <TableCell className="text-right">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal className="cursor-pointer" />
//                   </PopoverTrigger>
//                   <PopoverContent className="w-32 bg-white shadow-lg rounded-md p-2">
//                     <div
//                       onClick={() => navigate(`/admin/companies/${job._id}`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md"
//                     >
//                       <Edit2 className="w-4" />
//                       <span>Edit</span>
//                     </div>
//                     <div
//                       onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md mt-1"
//                     >
//                       <Eye className="w-4" />
//                       <span>Applicants</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminJobsTable;


// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, Eye, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const AdminJobsTable = () => {
//   const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredJobs = allAdminJobs.filter((job) => {
//       if (!searchJobByText) return true;
//       return (
//         job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
//         job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
//       );
//     });
//     setFilterJobs(filteredJobs);
//   }, [allAdminJobs, searchJobByText]);

//   return (
//     <div className="overflow-x-auto">
//       <Table className="min-w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg">
//         <TableCaption className="text-lg font-semibold dark:text-gray-300">
//           A list of your recently posted jobs
//         </TableCaption>
//         <TableHeader>
//           <TableRow className="bg-gray-100 dark:bg-gray-700">
//             <TableHead>Company Name</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Positions</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterJobs?.map((job) => (
//             <TableRow key={job._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//               <TableCell>{job?.company?.name}</TableCell>
//               <TableCell>{job?.title}</TableCell>
//               <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//               <TableCell>{job?.position}</TableCell>
//               <TableCell className="text-right">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal className="cursor-pointer text-gray-700 dark:text-gray-300" />
//                   </PopoverTrigger>
//                   <PopoverContent className="w-32 bg-white dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-md p-2">
//                     <div
//                       onClick={() => navigate(`/admin/companies/${job._id}`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                     >
//                       {/* <Edit2 className="w-4" />
//                       <span>Edit</span> */}
//                     </div>
//                     <div
//                       onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mt-1"
//                     >
//                       <Eye className="w-4" />
//                       <span>Applicants</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminJobsTable;



// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, Eye, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const AdminJobsTable = () => {
//   const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     let sortedJobs = [...allAdminJobs]; // Copy the jobs array

//     // Sort jobs by `createdAt` in descending order (latest first)
//     sortedJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//     // Filter jobs based on search text
//     const filteredJobs = sortedJobs.filter((job) => {
//       if (!searchJobByText) return true;
//       return (
//         job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
//         job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
//       );
//     });

//     setFilterJobs(filteredJobs);
//   }, [allAdminJobs, searchJobByText]);

//   return (
//     <div className="overflow-x-auto">
//       <Table className="min-w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg">
//         <TableCaption className="text-lg font-semibold dark:text-gray-300">
//           A list of your recently posted jobs
//         </TableCaption>
//         <TableHeader>
//           <TableRow className="bg-gray-100 dark:bg-gray-700">
//             <TableHead>Company Name</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Positions</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterJobs?.map((job) => (
//             <TableRow key={job._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//               <TableCell>{job?.company?.name}</TableCell>
//               <TableCell>{job?.title}</TableCell>
//               <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//               <TableCell>{job?.position}</TableCell>
//               <TableCell className="text-right">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal className="cursor-pointer text-gray-700 dark:text-gray-300" />
//                   </PopoverTrigger>
//                   <PopoverContent className="w-32 bg-white dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-md p-2">
//                     <div
//                       onClick={() => navigate(`/admin/companies/${job._id}`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                     >
//                       {/* <Edit2 className="w-4" />
//                       <span>Edit</span> */}
//                     </div>
//                     <div
//                       onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mt-1"
//                     >
//                       <Eye className="w-4" />
//                       <span>Applicants</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminJobsTable;




import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {  Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { JOB_API_END_POINT } from "@/utils/constant";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let sortedJobs = [...allAdminJobs];

    // Sort jobs by `createdAt` in descending order (latest first)
    sortedJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Filter jobs based on search text
    const filteredJobs = sortedJobs.filter((job) => {
      if (!searchJobByText) return true;
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });

    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  // Function to handle job deletion
  const handleDeleteJob = async (jobId) => {
    try {
      const res = await axios.delete(`${JOB_API_END_POINT}/delete/${jobId}`, {
        withCredentials: true, // Ensure authentication is sent
      });

      if (res.data.success) {
        toast.success("Job deleted successfully.");
        setFilterJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error(error.response?.data?.message || "Failed to delete job");
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg">
      <TableCaption className="caption-top text-lg font-semibold mb-5">A list of posted jobs</TableCaption>
     
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-700">
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Positions</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.map((job) => (
            <TableRow key={job._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <TableCell>{job?.company?.name}</TableCell>
              <TableCell>{job?.title}</TableCell>
              <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
              <TableCell>{job?.position}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal className="cursor-pointer text-gray-700 dark:text-gray-300" />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 bg-white dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-md p-2">
                    <div
                      onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    >
                      <Eye className="w-4" />
                      <span>Applicants</span>
                    </div>
                    <div
                      onClick={() => handleDeleteJob(job._id)}
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-100 dark:hover:bg-red-700 rounded-md text-red-600 dark:text-red-400 mt-1"
                    >
                      <Trash2 className="w-4" />
                      <span>Delete</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
