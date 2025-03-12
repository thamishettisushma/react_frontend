// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { RadioGroup } from '../ui/radio-group'
// import { Button } from '../ui/button'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '@/redux/authSlice'
// import { Loader2 } from 'lucide-react'

// const Signup = () => {

//     const [input, setInput] = useState({
//         fullname: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: ""
//     });
//     const {loading,user} = useSelector(store=>store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }
//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] });
//     }
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();    //formdata object
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }

//         try {
//             dispatch(setLoading(true));
//             const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//                 headers: { 'Content-Type': "multipart/form-data" },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         } finally{
//             dispatch(setLoading(false));
//         }
//     }

//     useEffect(()=>{
//         if(user){
//             navigate("/");
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center max-w-7xl mx-auto'>
//                 <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
//                     <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
//                     <div className='my-2'>
//                         <Label>Full Name</Label>
//                         <Input
//                             type="text"
//                             value={input.fullname}
//                             name="fullname"
//                             onChange={changeEventHandler}
//                             placeholder="enter your fullname"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Email</Label>
//                         <Input
//                             type="email"
//                             value={input.email}
//                             name="email"
//                             onChange={changeEventHandler}
//                             placeholder="enter your email"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Phone Number</Label>
//                         <Input
//                             type="text"
//                             value={input.phoneNumber}
//                             name="phoneNumber"
//                             onChange={changeEventHandler}
//                             placeholder="enter your phone number"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Password</Label>
//                         <Input
//                             type="password"
//                             value={input.password}
//                             name="password"
//                             onChange={changeEventHandler}
//                             placeholder="enter your password "
//                         />
//                     </div>
//                     <div className='flex items-center justify-between'>
//                         <RadioGroup className="flex items-center gap-4 my-5">
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r1">Student</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r2">Recruiter</Label>
//                             </div>
//                         </RadioGroup>
//                     </div>
//                         <div className='flex items-center gap-2'>
//                             <Label>Profile</Label>
//                             <Input
//                                 accept="image/*"
//                                 type="file"
//                                 onChange={changeFileHandler}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                     {/* </div> */}
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
//                     }
//                     <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup






// import React, { useEffect, useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { RadioGroup } from '../ui/radio-group';
// import { Button } from '../ui/button';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { toast } from 'sonner';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoading } from '@/redux/authSlice';
// import { Loader2 } from 'lucide-react';

// const Signup = () => {
//     const [input, setInput] = useState({
//         fullname: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: ""
//     });

//     const { loading, user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }

//         try {
//             dispatch(setLoading(true));
//             const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//                 headers: { 'Content-Type': "multipart/form-data" },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || "Something went wrong.");
//         } finally {
//             dispatch(setLoading(false));
//         }
//     };

//     useEffect(() => {
//         if (user) navigate("/");
//     }, [user, navigate]);

//     return (
//         <div className="min-h-screen flex flex-col mt-6">
//             <Navbar />
//             <div className="flex flex-1 items-center justify-center px-4">
//                 <form
//                     onSubmit={submitHandler}
//                     className="w-full max-w-md border border-gray-200 rounded-lg p-6 shadow-md bg-white"
//                 >
//                     <h1 className="font-bold text-2xl text-center mb-5">Sign Up</h1>

//                     <div className="my-3">
//                         <Label>Full Name</Label>
//                         <Input
//                             type="text"
//                             value={input.fullname}
//                             name="fullname"
//                             onChange={changeEventHandler}
//                             placeholder="Enter your full name"
//                             required
//                         />
//                     </div>

//                     <div className="my-3">
//                         <Label>Email</Label>
//                         <Input
//                             type="email"
//                             value={input.email}
//                             name="email"
//                             onChange={changeEventHandler}
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>

//                     <div className="my-3">
//                         <Label>Phone Number</Label>
//                         <Input
//                             type="text"
//                             value={input.phoneNumber}
//                             name="phoneNumber"
//                             onChange={changeEventHandler}
//                             placeholder="Enter your phone number"
//                             required
//                         />
//                     </div>

//                     <div className="my-3">
//                         <Label>Password</Label>
//                         <Input
//                             type="password"
//                             value={input.password}
//                             name="password"
//                             onChange={changeEventHandler}
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>

//                     {/* Role Selection */}
//                     <div className="my-4">
//                         <Label>Role</Label>
//                         <RadioGroup className="flex items-center gap-4 mt-2">
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label>Student</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label>Recruiter</Label>
//                             </div>
//                         </RadioGroup>
//                     </div>

//                     {/* Profile Upload */}
//                     <div className="my-4">
//                         <Label>Profile Picture</Label>
//                         <Input
//                             accept="image/*"
//                             type="file"
//                             onChange={changeFileHandler}
//                             className="cursor-pointer"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <Button type="submit" className="w-full my-4">
//                         {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Signup"}
//                     </Button>

//                     {/* Login Link */}
//                     <p className="text-sm text-center">
//                         Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;





import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("fullname", input.fullname);
    //     formData.append("email", input.email);
    //     formData.append("phoneNumber", input.phoneNumber);
    //     formData.append("password", input.password);
    //     formData.append("role", input.role);
    //     if (input.file) {
    //         formData.append("file", input.file);
    //     }

    //     try {
    //         dispatch(setLoading(true));
    //         const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
    //             headers: { 'Content-Type': "multipart/form-data" },
    //             withCredentials: true,
    //         });
    //         if (res.data.success) {
    //             navigate("/login");
    //             toast.success(res.data.message);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         toast.error(error.response?.data?.message || "Something went wrong.");
    //     } finally {
    //         dispatch(setLoading(false));
    //     }
    // };

    const submitHandler = async (e) => {
        e.preventDefault();
    
        // Check for missing fields
        const requiredFields = ["fullname", "email", "phoneNumber", "password", "role"];
        for (const field of requiredFields) {
            if (!input[field]) {
                toast.error(`${field} is required.`);
                return;
            }
        }
    
        // Check if file is selected
        if (!input.file) {
            toast.error("Please choose a file.");
            return;
        }
    
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        formData.append("file", input.file);
    
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
    
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || "An error occurred during registration.";
            toast.error(errorMessage);
        } finally {
            dispatch(setLoading(false));
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            submitHandler(e);
        }
    };

    useEffect(() => {
        if (user) navigate("/");
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex flex-col mt-1  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <div className="flex flex-1 items-center justify-center px-4">
                <form
                    onSubmit={submitHandler}
                    className="w-full max-w-md border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800"
                    onKeyDown={handleKeyDown} // Add keydown event on form

                >
                    <h1 className="font-bold text-2xl text-center">Sign Up</h1>

                    <div className="my-3">
                        <Label className="text-gray-700 dark:text-gray-300">Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                            required
                            className="dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="my-3">
                        <Label className="text-gray-700 dark:text-gray-300">Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Enter your email"
                            required
                            className="dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="my-3">
                        <Label className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            // onChange={changeEventHandler}
                            onChange={(e) => {
                                if (e.target.value.length <= 10) {
                                    changeEventHandler(e);
                                }
                            }}
                            placeholder="Enter your phone number"
                            required
                            className="dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="my-3">
                        <Label className="text-gray-700 dark:text-gray-300">Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Enter your password"
                            required
                            className="dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    {/* Role Selection */}
                    <div className="my-4">
                        <Label className="text-gray-700 dark:text-gray-300">Role</Label>
                        <RadioGroup className="flex items-center gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer dark:bg-gray-700 dark:text-white"
                                />
                                <Label className="text-gray-700 dark:text-gray-300">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer dark:bg-gray-700 dark:text-white"
                                />
                                <Label className="text-gray-700 dark:text-gray-300">Recruiter</Label>
                            </div>
                        </RadioGroup>

                        {/* Profile Upload */}
                        <Label className="text-gray-700 dark:text-gray-300">Profile Picture</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
                            className="cursor-pointer dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    {/* Profile Upload */}
                    {/* <div className="my-4">
                        <Label className="text-gray-700 dark:text-gray-300">Profile Picture</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
                            className="cursor-pointer dark:bg-gray-700 dark:text-white"
                        />
                    </div> */}
                    

                    {/* Submit Button */}
                    <Button type="submit" className="w-full my-4 bg-blue-600 dark:bg-blue-500">
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Signup"}
                    </Button>

                    {/* Login Link */}
                    <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                        Already have an account? <Link to="/login" className="text-blue-600 dark:text-blue-400">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
