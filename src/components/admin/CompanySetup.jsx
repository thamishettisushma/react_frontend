import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import useGetCompanyById from '@/hooks/useGetCompanyById';
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../ui/select";

const CompanySetup = () => {
    const params = useParams();
    useGetCompanyById(params.id);

    const [input, setInput] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
        file: null
    });

    const { singleCompany } = useSelector((store) => store.company);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('description', input.description);
        formData.append('website', input.website);
        formData.append('location', input.location);
        if (input.file) {
            formData.append('file', input.file);
        }

        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/companies');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'All fields are required');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (singleCompany) {
            setInput({
                name: singleCompany.name || '',
                description: singleCompany.description || '',
                website: singleCompany.website || '',
                location: singleCompany.location || '',
                file: null
            });
        }
    }, [singleCompany]);

    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <div className="max-w-lg mx-auto px-4 sm:px-6 md:px-8 my-10 ">
            <button className="flex items-center text-purple-700 hover:text-purple-900 mb-6 transition-all" onClick={() => navigate(-1)}>
                            <ArrowLeft className="w-6 h-6 mr-2" />
                            <span className="font-medium">Back</span>
            </button>
                <form onSubmit={submitHandler}>
                    <div className="flex items-center gap-4 pb-6">
                      
                        <h1 className="font-bold text-xl ml-50">Company Setup</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label>Company Name <span className="text-red-500">*</span></Label>
                            <Input type="text" name="name" value={input.name} onChange={changeEventHandler} />
                        </div>
                        <div>
                            <Label>Description<span className="text-red-500">*</span></Label>
                              <Textarea
                              name="description"
                              value={input.description}
                              onChange={changeEventHandler}
                              // className="w-full my-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                              placeholder="Enter your requirements..."
                               className="my-1 h-10"
                            />

                            {/* <Input type="text" name="description" value={input.description} onChange={changeEventHandler} /> */}
                        </div>
                        <div>
                            <Label>Website<span className="text-red-500">*</span></Label>
                            <Input type="text" name="website" value={input.website} onChange={changeEventHandler} />
                        </div>
                        <div>
                            {/* <Label>Location<span className="text-red-500">*</span></Label>
                            <Input type="text" name="location" value={input.location} onChange={changeEventHandler} /> */}
                            <Label>
  Location<span className="text-red-500">*</span>
</Label>
<Select onValueChange={(value) => setInput({ ...input, location: value })}>
  <SelectTrigger className="w-full my-1">
    <SelectValue placeholder="Select Location" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="Hyderabad">Hyderabad</SelectItem>
      <SelectItem value="Delhi">Delhi</SelectItem>
      <SelectItem value="Bangalore">Bangalore</SelectItem>
      <SelectItem value="Pune">Pune</SelectItem>
      <SelectItem value="Mumbai">Mumbai</SelectItem>
      <SelectItem value="Maharastra">Maharastra</SelectItem>
      <SelectItem value="Vizag">Vizag</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>



                        </div>
                        <div className="col-span-1 sm:col-span-2">
                            <Label>Logo<span className="text-red-500">*</span></Label>
                            <Input type="file" accept="image/*" onChange={changeFileHandler} />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-full my-6"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                            </span>
                        ) : (
                            'Update'
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CompanySetup;
