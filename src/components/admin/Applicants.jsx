import React, { useEffect,useState } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";
import ApplicantsTableSmallScreen from "./Applicantstablesmallscreen";
import { ArrowLeft } from 'lucide-react';

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();

const navigate = useNavigate();
  const { applicants } = useSelector((store) => store.application);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
        useEffect(() => {
            const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          { withCredentials: true }
        );
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, [params.id, dispatch]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-lg sm:text-xl my-5">
        <button className="flex items-center text-purple-700 hover:text-purple-900 mb-6 transition-all" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-6 h-6 mr-2" />
                <span className="font-medium">Back</span>
            </button>
          Applicants ({applicants?.applications?.length || 0})
        </h1>
        <div className="overflow-x-auto">
          {/* <ApplicantsTable applicants={applicants?.applications || []} /> */}
          {isSmallScreen ? <ApplicantsTableSmallScreen /> : <ApplicantsTable />}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
