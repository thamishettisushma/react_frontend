import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-full my-5 px-4">
        <form
          onSubmit={submitHandler}
          className="p-8 w-full max-w-4xl border border-gray-200 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>
                Title<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="my-1"
              />
            </div>
            <div>
              <Label>
                Description<span className="text-red-500">*</span>
              </Label>

              <Textarea
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Enter your requirements..."
                className="my-1 h-10"
              />
            </div>
            <div>
              <Label>
                Requirements<span className="text-red-500">*</span>
              </Label>

              <Textarea
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                placeholder="Enter your requirements..."
                className="my-1 h-10"
              />
            </div>
            <div>
              <Label>
                Salary(LPA)<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="my-1"
              />
            </div>
            <div>
              <Label>
                Location<span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  setInput({ ...input, location: value })
                }
              >
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
            <div>
              <div>
                <Label>
                  Job Type<span className="text-red-500">*</span>
                </Label>
                <Select
                  onValueChange={(value) =>
                    setInput({ ...input, jobType: value })
                  }
                >
                  <SelectTrigger className="w-full my-1">
                    <SelectValue placeholder="Select Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="full-time">Full Time</SelectItem>
                      <SelectItem value="part-time">Part Time</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="contract">Contract Based</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>
                Experience Level<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="my-1"
              />
            </div>
            <div>
              <Label>
                No of Positions<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="my-1"
              />
            </div>
            {companies.length > 0 && (
              <div className="col-span-1 sm:col-span-2">
                <Label>
                  Select a Company<span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={selectChangeHandler}>
                  <SelectTrigger className="w-full my-1">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company.name.toLowerCase()}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Post New Job
            </Button>
          )}
          {companies.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center my-3">
              *Please register a company first before posting a job.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;
