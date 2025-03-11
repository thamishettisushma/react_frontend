import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

const CompaniesCardView = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const navigate = useNavigate();

    const filteredCompanies = companies.filter(company =>
        !searchCompanyByText || company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
    );

    const handleDelete = async (companyId) => {
        try {
            const res = await axios.delete(`${COMPANY_API_END_POINT}/delete/${companyId}`, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });

            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete company");
        }
    };

    return (
        <div className="w-full px-4 space-y-4">
            {filteredCompanies.length === 0 ? (
                <h4 className="text-center py-4 text-gray-600 dark:text-gray-400 text-lg font-semibold">
                    No companies found.
                </h4>
            ) : (
                filteredCompanies.map((company) => (
                    <div 
                        key={company._id} 
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2 border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-md font-semibold text-gray-900 dark:text-white">
                            <b>Name:</b> {company.name}
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            <b>Location:</b> {company.location || "N/A"}
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            <b>Created At:</b> {company?.createdAt?.split("T")[0]}
                        </h2>

                        {/* Actions */}
                        <div className="flex items-center gap-4 mt-2">
                            <button 
                                onClick={() => navigate(`/admin/companies/${company._id}`)}
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
                            >
                                <Edit2 className="w-4 h-4" />
                                <span>Edit</span>
                            </button>
                            <button 
                                onClick={() => handleDelete(company._id)}
                                className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
                            >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CompaniesCardView;
