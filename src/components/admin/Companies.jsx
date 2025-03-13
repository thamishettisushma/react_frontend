import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import CompaniesCardView from './Companiescards'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
      const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
        const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [input]);
    

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl lg:max-w-6xl mx-auto my-6 px-4">
                {/* ✅ Responsive Search & Button Container */}
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 my-5 mb-10">
                    <Input
                        className="w-full sm:w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button 
                        onClick={() => navigate("/admin/companies/create")} 
                        className="w-full sm:w-auto"
                    >
                        New Company
                    </Button>
                </div>
                {/* <CompaniesTable />
                <CompaniesCardView/> */}
                {isSmallScreen ? < CompaniesCardView/> : <CompaniesTable />}
            </div>
        </div>
    );
};

export default Companies;
