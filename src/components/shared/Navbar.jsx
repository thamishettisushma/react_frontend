// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }
//     return (
//         <div className='bg-white'>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
//                 <div>
//                     <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Bridge</span></h1>
//                     {/* <img src='http://googleusercontent.com/image_generation_content/1' width={25} height={25}/> */}
//                 </div>
//                 <div className='flex items-center gap-12'>
//                     <ul className='flex font-medium items-center gap-5'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/">Home</Link></li>
//                                     <li><Link to="/jobs">Jobs</Link></li>
//                                     <li><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }

//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline">Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div className=''>
//                                         <div className='flex gap-2 space-y-2'>
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col my-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                         <User2 />
//                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }

//                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar

// Navbar 2nd

// import React, { useState } from 'react';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Button } from '../ui/button';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { LogOut, Menu, X, User2 } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { setUser } from '@/redux/authSlice';
// import { toast } from 'sonner';

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response?.data?.message || "Logout failed");
//         }
//     };

//     return (
//         <>
//             {/* Navbar */}
//             <div className='bg-white shadow-md fixed top-0 w-full z-50'>
//                 <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-8'>

//                     {/* Logo */}
//                     <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate("/")}>
//                         <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Bridge</span></h1>
//                     </div>

//                     {/* Mobile Menu & Profile */}
//                     <div className="md:hidden flex items-center gap-4">
//                         {/* Profile Avatar (Beside Hamburger) */}
//                         {user && (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div>
//                                         <div className='flex gap-2 items-center'>
//                                             <Avatar>
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col mt-4 text-gray-600'>
//                                             {user.role === 'student' && (
//                                                 <Link to="/profile" className='flex items-center gap-2 cursor-pointer'>
//                                                     <User2 />
//                                                     <Button variant="link">View Profile</Button>
//                                                 </Link>
//                                             )}
//                                             <button onClick={logoutHandler} className='flex items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button variant="link">Logout</Button>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )}

//                         {/* Hamburger Menu */}
//                         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                             {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
//                         </button>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className='hidden md:flex items-center gap-12'>
//                         <ul className='flex font-medium items-center gap-5'>
//                             {user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/">Home</Link></li>
//                                     <li><Link to="/jobs">Jobs</Link></li>
//                                     <li><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )}
//                         </ul>

//                         {/* Profile & Logout Dropdown */}
//                         {user ? (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div>
//                                         <div className='flex gap-2 items-center'>
//                                             <Avatar>
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col mt-4 text-gray-600'>
//                                             {user.role === 'student' && (
//                                                 <Link to="/profile" className='flex items-center gap-2 cursor-pointer'>
//                                                     <User2 />
//                                                     <Button variant="link">View Profile</Button>
//                                                 </Link>
//                                             )}
//                                             <button onClick={logoutHandler} className='flex items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button variant="link">Logout</Button>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         ) : (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline">Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className='md:hidden flex flex-col items-center bg-white w-full py-4 shadow-md absolute top-16 left-0 right-0'>
//                         <ul className='flex flex-col items-center gap-4'>
//                             {user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies" onClick={() => setIsMobileMenuOpen(false)}>Companies</Link></li>
//                                     <li><Link to="/admin/jobs" onClick={() => setIsMobileMenuOpen(false)}>Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
//                                     <li><Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>Jobs</Link></li>
//                                     <li><Link to="/browse" onClick={() => setIsMobileMenuOpen(false)}>Browse</Link></li>
//                                 </>
//                             )}
//                         </ul>

//                         {/* Login/Signup Only for Non-Logged-In Users */}
//                         {!user && (
//                             <div className='mt-4 flex flex-col gap-2'>
//                                 <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
//                                     <Button variant="outline" className="w-full">Login</Button>
//                                 </Link>
//                                 <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
//                                     <Button className="w-full bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>

//             {/* This padding pushes the content down */}
//             <div className="pt-16">
//                 {/* Your page content starts here */}
//             </div>
//         </>
//     );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Button } from '../ui/button';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { LogOut, Menu, X, User2 } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { setUser } from '@/redux/authSlice';
// import { toast } from 'sonner';

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response?.data?.message || "Logout failed");
//         }
//     };

//     return (
//         <>
//             {/* Navbar */}
//             <div className='bg-white shadow-md fixed top-0 w-full z-50'>
//                 <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-8'>

//                     {/* Logo - Navigates to Home */}
//                     <div
//                         className='flex items-center gap-2 cursor-pointer'
//                         onClick={() => navigate('/')}
//                     >
//                         <h1 className='text-2xl font-bold'>
//                             Job<span className='text-[#F83002]'>Bridge</span>
//                         </h1>

//                     </div>

//                     {/* Mobile Menu & Profile */}
//                     <div className="md:hidden flex items-center gap-4">
//                         {/* Profile Avatar */}
//                         {user && (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div>
//                                         <div className='flex gap-2 items-center'>
//                                             <Avatar>
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col mt-4 text-gray-600'>
//                                             {user.role === 'student' && (
//                                                 <Link to="/profile" className='flex items-center gap-2 cursor-pointer'>
//                                                     <User2 />
//                                                     <Button variant="link">View Profile</Button>
//                                                 </Link>
//                                             )}
//                                             <button onClick={logoutHandler} className='flex items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button variant="link">Logout</Button>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )}

//                         {/* Hamburger Menu */}
//                         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                             {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
//                         </button>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className='hidden md:flex items-center gap-12'>
//                         <ul className='flex font-medium items-center gap-5'>
//                             {user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies" className="hover:text-[#F83002] transition duration-300">Companies</Link></li>
//                                     <li><Link to="/admin/jobs" className="hover:text-[#F83002] transition duration-300">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/" className="hover:text-[#F83002] transition duration-300">Home</Link></li>
//                                     <li><Link to="/jobs" className="hover:text-[#F83002] transition duration-300">Jobs</Link></li>
//                                     <li><Link to="/browse" className="hover:text-[#F83002] transition duration-300">Browse</Link></li>
//                                 </>
//                             )}
//                         </ul>

//                         {/* Profile & Logout Dropdown */}
//                         {user ? (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div>
//                                         <div className='flex gap-2 items-center'>
//                                             <Avatar>
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col mt-4 text-gray-600'>
//                                             {user.role === 'student' && (
//                                                 <Link to="/profile" className='flex items-center gap-2 cursor-pointer'>
//                                                     <User2 />
//                                                     <Button variant="link">View Profile</Button>
//                                                 </Link>
//                                             )}
//                                             <button onClick={logoutHandler} className='flex items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button variant="link">Logout</Button>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         ) : (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline">Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className='md:hidden flex flex-col items-center bg-white w-full py-4 shadow-md absolute top-16 left-0 right-0'>
//                         <ul className='flex flex-col items-center gap-4'>
//                             {user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Companies</Link></li>
//                                     <li><Link to="/admin/jobs" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
//                                     <li><Link to="/jobs" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Jobs</Link></li>
//                                     <li><Link to="/browse" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Browse</Link></li>
//                                 </>
//                             )}
//                         </ul>
//                     </div>
//                 )}
//             </div>

//             {/* This padding pushes the content down */}
//             <div className="pt-16">
//                 {/* Your page content starts here */}
//             </div>
//         </>
//     );
// };

// export default Navbar;

//nav before toggle theme
// import React, { useState } from "react";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Button } from "../ui/button";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { LogOut, Menu, X, User2,Moon,Sun } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";
// //toggle
// import { useTheme } from "../context/ThemeProvider.jsx";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Logout failed");
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div className="bg-white dark:bg-black shadow-md fixed top-0 w-full z-50">
//         <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-8">
//           {/* Logo - Navigates to Home */}
//           <div
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             <h1 className="text-2xl font-bold">
//               Job<span className="text-[#F83002]">Bridge</span>
//             </h1>
//           </div>

//             {/* Dark Mode Toggle Button */}
//             <Button variant="outline" size="icon" onClick={toggleTheme}>
//                         {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
//                     </Button>

//           {/* Mobile Menu & Profile */}
//           <div className="md:hidden flex items-center gap-4 bg-white dark:bg-black">
//             {/* Profile Avatar (Mobile) */}
//             {user && (
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Avatar className="cursor-pointer">
//                     <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                   </Avatar>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-80">
//                   <div>
//                     <div className="flex gap-2 items-center">
//                       <Avatar>
//                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                       </Avatar>
//                       <div>
//                         <h4 className="font-medium">{user?.fullname}</h4>
//                       </div>
//                     </div>
//                     <div className="flex flex-col mt-4 text-gray-600">
//                       {user.role === "student" && (
//                         <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
//                           <User2 />
//                           <Button variant="link">View Profile</Button>
//                         </Link>
//                       )}
//                       <button onClick={logoutHandler} className="flex items-center gap-2 cursor-pointer">
//                         <LogOut />
//                         <Button variant="link">Logout</Button>
//                       </button>
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             )}

//             {/* Hamburger Menu */}
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-12">
//             <ul className="flex font-medium items-center gap-5">
//               {user && user.role === "recruiter" ? (
//                 <>
//                   <li>
//                     <Link to="/admin/companies" className="hover:text-[#F83002] transition duration-300">
//                       Companies
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/jobs" className="hover:text-[#F83002] transition duration-300">
//                       Jobs
//                     </Link>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <Link to="/" className="hover:text-[#F83002] transition duration-300">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/jobs" className="hover:text-[#F83002] transition duration-300">
//                       Jobs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/browse" className="hover:text-[#F83002] transition duration-300">
//                       Browse
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>

//             {/* Profile & Logout Dropdown (Desktop) */}
//             {user ? (
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Avatar className="cursor-pointer">
//                     <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                   </Avatar>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-80">
//                   <div>
//                     <div className="flex gap-2 items-center">
//                       <Avatar>
//                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                       </Avatar>
//                       <div>
//                         <h4 className="font-medium">{user?.fullname}</h4>
//                       </div>
//                     </div>
//                     <div className="flex flex-col mt-4 text-gray-600">
//                       {user.role === "student" && (
//                         <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
//                           <User2 />
//                           <Button variant="link">View Profile</Button>
//                         </Link>
//                       )}
//                       <button onClick={logoutHandler} className="flex items-center gap-2 cursor-pointer">
//                         <LogOut />
//                         <Button variant="link">Logout</Button>
//                       </button>
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <Link to="/login">
//                   <Button variant="outline">Login</Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden flex flex-col items-center bg-white w-full py-4 shadow-md absolute top-16 left-0 right-0">
//             <ul className="flex flex-col items-center gap-4">
//               {user && user.role === "recruiter" ? (
//                 <>
//                   <li>
//                     <Link to="/admin/companies" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
//                       Companies
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/jobs" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
//                       Jobs
//                     </Link>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <Link to="/" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/jobs" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
//                       Jobs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/browse" className="hover:text-[#F83002] transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
//                       Browse
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>

//             {!user && (
//               <div className="flex flex-col items-center gap-3 mt-4">
//                 <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
//                   <Button variant="outline">Login</Button>
//                 </Link>
//                 <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
//                   <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="pt-16"></div>
//     </>
//   );
// };

// export default Navbar;

//toggle button added code
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, Menu, X, User2, Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";
import { useTheme } from "../context/ThemeProvider.jsx";
import LogoutDialog from "../Logoutdialoguebox";


const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
   const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // const logoutHandler = async () => {
  //   // const confirmLogout = window.confirm("Are you sure you want to logout?");
  //   // if (!confirmLogout) return; // If user clicks "Cancel", do nothing

  //   try {
  //     const res = await axios.get(`${USER_API_END_POINT}/logout`, {
  //       withCredentials: true,
  //     });
  //     if (res.data.success) {
  //       dispatch(setUser(null));
  //       navigate("/");
  //       toast.success(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response?.data?.message || "Logout failed");
  //   }
   
  // };

  return (
    <>
      {/* Navbar */}
      <div className="bg-white dark:bg-black shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-8 ">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            // onClick={() => navigate("/")}
          >
            <h1 className="text-2xl font-bold"  onClick={() => navigate("/")}>
              Job<span className="text-[#F83002]">Bridge</span>
            </h1>
            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              // className="ml-4 hidden sm:block"
              className="hidden sm:flex items-center justify-center ml-4"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu & Profile */}
          <div className="md:hidden flex items-center gap-4">
            {/* Profile Avatar (Mobile) */}
            {user && (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer ">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="Profile"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-55 ">
                  <div>
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt="Profile"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user?.fullname}</h4>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 text-gray-600">
                      {user.role === "student" && (
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <User2 />
                          <Button variant="link">View Profile</Button>
                        </Link>
                      )}
                      {/* <button
                        onClick={logoutHandler}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut />
                        <Button variant="link">Logout</Button>
                      </button> */}
                      <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 cursor-pointer "
                      >
                        <LogOut />
                   
                        {/* <Button variant="link">Logout</Button> */}
                        
      <LogoutDialog open={open} setOpen={setOpen} />
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}

            {/* Hamburger Menu */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              {user && user.role === "recruiter" ? (
                <>
                  <li>
                    <Link
                      to="/admin/companies"
                      className={`hover:text-[#F83002] transition duration-300 ${
                        window.location.pathname === "/admin/companies"
                          ? "text-[#F83002] font-bold"
                          : "text-black dark:text-white"
                      }`}
                    >
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/jobs"
                      className={`hover:text-[#F83002] transition duration-300 ${
                        window.location.pathname === "/admin/jobs"
                          ? "text-[#F83002] font-bold"
                          : "text-black dark:text-white"
                      }`}
                    >
                      Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/"
                      className={`hover:text-[#F83002] transition duration-300 ${
                        window.location.pathname === "/"
                          ? "text-[#F83002] font-bold"
                          : "text-black dark:text-white"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className={`hover:text-[#F83002] transition duration-300 ${
                        window.location.pathname === "/jobs"
                          ? "text-[#F83002] font-bold"
                          : "text-black dark:text-white"
                      }`}
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/browse"
                      className={`hover:text-[#F83002] transition duration-300 ${
                        window.location.pathname === "/browse"
                          ? "text-[#F83002] font-bold"
                          : "text-black dark:text-white"
                      }`}
                    >
                      Browse
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* Profile & Logout Dropdown (Desktop) */}
            {user ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="Profile"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div>
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt="Profile"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user?.fullname}</h4>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 text-gray-600">
                      {user.role === "student" && (
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <User2 />
                          <Button variant="link">View Profile</Button>
                        </Link>
                      )}
                      {/* <button
                        onClick={logoutHandler} 
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut />
                   
                        <Button variant="link">Logout</Button>
                      </button> */}
                      <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 cursor-pointer dark:text-white"
                      >
                        <LogOut />
                   
                        {/* <Button variant="link">Logout</Button> */}
                        
      <LogoutDialog open={open} setOpen={setOpen}/>
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                    Signup
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white dark:bg-black dark:text-white w-full py-4 shadow-md absolute top-16 left-0 right-0">
            <ul className="flex flex-col items-center gap-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/browse">Browse</Link></li>
            </ul>
            {!user && (
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-32">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-32 bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
                </Link>
              </div>
            )}
          </div>
        )} */}
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white dark:bg-black dark:text-white w-full py-4 shadow-md absolute top-16 left-0 right-0">
            <ul className="flex flex-col items-center gap-4">
              {user ? (
                user.role === "recruiter" ? (
                  <>
                    <li>
                      <Link
                        to="/admin/companies"
                        className="hover:text-[#F83002] transition duration-300"
                      >
                        Companies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/jobs"
                        className="hover:text-[#F83002] transition duration-300"
                      >
                        Jobs
                      </Link>
                    </li>
                    <li>
                    <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/"
                        className="hover:text-[#F83002] transition duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/jobs"
                        className="hover:text-[#F83002] transition duration-300"
                      >
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/browse"
                        className="hover:text-[#F83002] transition duration-300"
                      >
                        Browse
                      </Link>
                    </li>
                    <li>
                    <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
                    </li>
                  </>
                )
              ) : (
                <>
                  <li>
                    <Link
                      to="/"
                      className="hover:text-[#F83002] transition duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className="hover:text-[#F83002] transition duration-300"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/browse"
                      className="hover:text-[#F83002] transition duration-300"
                    >
                      Browse
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* Profile & Logout Buttons */}
            {/* {user && (
      <div className="flex flex-col gap-2 mt-4">
        <button onClick={logoutHandler} className="flex items-center gap-2 cursor-pointer">
          <LogOut />
          <Button variant="link">Logout</Button>
        </button>
      </div>
    )} */}

            {/* Login/Signup for Unauthenticated Users */}
            {!user && (
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-32">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-32 bg-[#6A38C2] hover:bg-[#5b30a6]">
                    Signup
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pt-16"></div>

    </>
  );
};

export default Navbar;
