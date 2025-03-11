// import React, { useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { COMPANY_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch } from 'react-redux'
// import { setSingleCompany } from '@/redux/companySlice'

// const CompanyCreate = () => {
//     const navigate = useNavigate();
//     const [companyName, setCompanyName] = useState();
//     const dispatch = useDispatch();
//     const registerNewCompany = async () => {
//         try {
//             const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 withCredentials:true
//             });
//             if(res?.data?.success){
//                 dispatch(setSingleCompany(res.data.company));
//                 toast.success(res.data.message);
//                 const companyId = res?.data?.company?._id;
//                 navigate(`/admin/companies/${companyId}`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-4xl mx-auto'>
//                 <div className='my-10'>
//                     <h1 className='font-bold text-2xl'>Your Company Name</h1>
//                     <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
//                 </div>

//                 <Label>Company Name</Label>
//                 <Input
//                     type="text"
//                     className="my-2"
//                     placeholder="JobHunt, Microsoft etc."
//                     onChange={(e) => setCompanyName(e.target.value)}
//                 />
//                 <div className='flex items-center gap-2 my-10'>
//                     <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
//                     <Button onClick={registerNewCompany}>Continue</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CompanyCreate



import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyName, setCompanyName] = useState("");

    const registerNewCompany = async () => {
        if (!companyName.trim()) {
            toast.error("Company name cannot be empty!");
            return;
        }
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                navigate(`/admin/companies/${res?.data?.company?._id}`);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to register company. Please try again.");
        }
    };

    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <div className="max-w-lg mx-auto px-4 sm:px-6 md:px-8">
                <div className="my-10">
                    <h1 className="font-bold text-2xl text-center sm:text-left">Your Company Name</h1>
                    <p className="text-gray-500 text-center sm:text-left">
                        What would you like to name your company? You can change this later.
                    </p>
                </div>

                <Label className="block text-lg font-semibold">Company Name</Label>
                <Input
                    type="text"
                    className="my-2 w-full"
                    placeholder="JobHunt, Microsoft, etc."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className="flex flex-col sm:flex-row items-center gap-3 my-10">
                    <Button variant="outline" className="w-full sm:w-auto" onClick={() => navigate("/admin/companies")}>
                        Cancel
                    </Button>
                    <Button className="w-full sm:w-auto" onClick={registerNewCompany}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
