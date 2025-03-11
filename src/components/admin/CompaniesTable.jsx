// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const CompaniesTable = () => {
//     const { companies, searchCompanyByText } = useSelector(store => store.company);
//     const [filterCompany, setFilterCompany] = useState(companies);
//     const navigate = useNavigate();
//     useEffect(()=>{
//         const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
//             if(!searchCompanyByText){
//                 return true
//             };
//             return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

//         });
//         setFilterCompany(filteredCompany);
//     },[companies,searchCompanyByText])
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent registered companies</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Logo</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterCompany?.map((company) => (
//                             <tr>
//                                 <TableCell>
//                                     <Avatar>
//                                         <AvatarImage src={company.logo}/>
//                                     </Avatar>
//                                 </TableCell>
//                                 <TableCell>{company.name}</TableCell>
//                                 <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                                 <Edit2 className='w-4' />
//                                                 <span>Edit</span>
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

// export default CompaniesTable



// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Edit2, MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const CompaniesTable = () => {
//     const { companies, searchCompanyByText } = useSelector(store => store.company);
//     const [filterCompany, setFilterCompany] = useState(companies);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const filteredCompany = companies.filter(company => {
//             return !searchCompanyByText || company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
//         });
//         setFilterCompany(filteredCompany);
//     }, [companies, searchCompanyByText]);

//     return (
//         <div className="w-full overflow-x-auto">
//             <Table className="w-full min-w-[600px]">
//                 <TableCaption>A list of your recently registered companies</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Logo</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Location</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {filterCompany?.map((company) => (
//                         <TableRow key={company._id}>
//                             <TableCell>
//                                 <Avatar className="h-10 w-10">
//                                     <AvatarImage src={company.logo} />
//                                 </Avatar>
//                             </TableCell>
//                             <TableCell>{company.name}</TableCell>
//                             <TableCell>{company.location}</TableCell>
//                             <TableCell className="text-right cursor-pointer">
//                                 <Popover>
//                                     <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                     <PopoverContent className="w-32">
//                                         <div 
//                                             onClick={() => navigate(`/admin/companies/${company._id}`)}
//                                             className="flex items-center gap-2 w-fit cursor-pointer hover:text-blue-500"
//                                         >
//                                             <Edit2 className="w-4" />
//                                             <span>Edit</span>
//                                         </div>
//                                     </PopoverContent>
//                                 </Popover>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default CompaniesTable;




// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Edit2, MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const CompaniesTable = () => {
//     const { companies, searchCompanyByText } = useSelector(store => store.company);
//     const [filterCompany, setFilterCompany] = useState([]);

//     const navigate = useNavigate();

//     useEffect(() => {
//         let sortedCompanies = [...companies];

//         // Sort companies by `createdAt` in descending order (latest first)
//         sortedCompanies.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//         // Filter companies based on search text
//         const filteredCompanies = sortedCompanies.filter(company => {
//             return !searchCompanyByText || company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
//         });

//         setFilterCompany(filteredCompanies);
//     }, [companies, searchCompanyByText]);

//     return (
//         <div className="w-full overflow-x-auto">
//             <Table className="w-full min-w-[600px]">
//                 <TableCaption>A list of your recently registered companies</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Logo</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Location</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {filterCompany?.map((company) => (
//                         <TableRow key={company._id}>
//                             <TableCell>
//                                 <Avatar className="h-10 w-10">
//                                     <AvatarImage src={company.logo} />
//                                 </Avatar>
//                             </TableCell>
//                             <TableCell>{company.name}</TableCell>
//                             <TableCell>{company.location}</TableCell>
//                             <TableCell className="text-right cursor-pointer">
//                                 <Popover>
//                                     <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                     <PopoverContent className="w-32">
//                                         <div 
//                                             onClick={() => navigate(`/admin/companies/${company._id}`)}
//                                             className="flex items-center gap-2 w-fit cursor-pointer hover:text-blue-500"
//                                         >
//                                             <Edit2 className="w-4" />
//                                             <span>Edit</span>
//                                         </div>
//                                     </PopoverContent>
//                                 </Popover>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default CompaniesTable;


import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal, Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let sortedCompanies = [...companies];
        sortedCompanies.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const filteredCompanies = sortedCompanies.filter(company =>
            !searchCompanyByText || company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        );
        setFilterCompany(filteredCompanies);
    }, [companies, searchCompanyByText]);


    const handleDelete = async (companyId) => {
        try {
            setLoading(true); // Show loading state if applicable
    
            const res = await axios.delete(`${COMPANY_API_END_POINT}/delete/${companyId}`, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,  // Ensure authentication is included
            });
    
            if (res.data.success) {
                toast.success(res.data.message);
                setFilterCompany(prevCompanies => prevCompanies.filter(company => company._id !== companyId));
            }
        } catch (error) {
            console.error("Error deleting company:", error);
            toast.error(error.response?.data?.message || "Failed to delete company");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="w-full overflow-x-auto">
            <Table className="w-full min-w-[600px]">
                <TableCaption className="caption-top text-lg font-semibold mb-5">A list of your  companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterCompany?.map((company) => (
                        <TableRow key={company._id}>
                            <TableCell>
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={company.logo} />
                                </Avatar>
                            </TableCell>
                            <TableCell>{company.name}</TableCell>
                            <TableCell>{company.location}</TableCell>
                            <TableCell className="text-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                    <PopoverContent className="w-32">
                                        <div 
                                            onClick={() => navigate(`/admin/companies/${company._id}`)}
                                            className="flex items-center gap-2 w-fit cursor-pointer hover:text-blue-500"
                                        >
                                            <Edit2 className="w-4" />
                                            <span>Edit</span>
                                        </div>
                                        <div 
                                            onClick={() => handleDelete(company._id)}
                                            className="flex items-center gap-2 w-fit cursor-pointer hover:text-red-500 mt-2"
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

export default CompaniesTable;
