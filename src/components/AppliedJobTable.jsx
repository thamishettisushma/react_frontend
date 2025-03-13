import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div className="w-full overflow-x-auto px-4">
      <Table className="min-w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg">
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-700">
            <TableHead className="px-4 py-2">Date</TableHead>
            <TableHead className="px-4 py-2">Job Role</TableHead>
            <TableHead className="px-4 py-2">Company</TableHead>
            <TableHead className="px-4 py-2 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-4 dark:text-gray-400"
              >
                You haven't applied for any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => {
              const jobDeleted = !appliedJob.job || appliedJob.job.deleted;

              return (
                <TableRow
                  key={appliedJob._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <TableCell className="px-4 py-2">
                    {appliedJob?.createdAt?.split("T")[0]}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {jobDeleted ? (
                      <span className="text-red-500">Hiring Closed</span>
                    ) : (
                      appliedJob.job.title
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {jobDeleted ? (
                      <span className="text-red-500">N/A</span>
                    ) : (
                      appliedJob.job.company?.name
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-right">
                    <Badge
                      className={`text-white px-3 py-1 rounded-md ${
                        appliedJob?.status === "rejected"
                          ? "bg-red-500 dark:bg-red-600"
                          : appliedJob.status === "pending"
                          ? "bg-gray-500 dark:bg-gray-600"
                          : "bg-green-500 dark:bg-green-600"
                      }`}
                    >
                      {appliedJob.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
