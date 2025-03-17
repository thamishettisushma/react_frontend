/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    profilePic: "", // This will only be set for guest users
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Function to login as guest
  const loginAsGuest = (role) => {
    const guestCredentials = {
      student: {
        email: "gueststudent@gmail.com",
        password: "guest123",
        name: "Guest Student",
        role: "student",
      },
      recruiter: {
        email: "guestrecruiter@gmail.com",
        password: "guest123",
        name: "Guest Recruiter",
        role: "recruiter",
      },
    };

    setInput(guestCredentials[role]);

    // Automatically submit the form
    submitHandler(null, guestCredentials[role]);
  };

  const submitHandler = async (e, guestData = null) => {
    if (e) e.preventDefault();

    const loginData = guestData || input;

    if (!loginData.role) {
      toast.error("Please select a role before proceeding.");
      return;
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${USER_API_END_POINT}/login`, loginData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col dark:bg-black-900 transition-all duration-300">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800"
        >
          <h1 className="font-bold text-2xl text-center mb-5 text-gray-900 dark:text-white">
            Login
          </h1>

          <div className="my-3">
            <Label htmlFor="email" className="dark:text-gray-300">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>
          <div className="my-3">
            <Label htmlFor="password" className="dark:text-gray-300">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="my-4">
            <Label className="dark:text-gray-300">Role</Label>
            <RadioGroup className="flex items-center gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="role-student"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="role-student" className="dark:text-gray-300">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="role-recruiter"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="role-recruiter" className="dark:text-gray-300">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full my-4 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>

          {/* Guest Login Buttons */}
          {/* <div className="flex justify-between gap-2">
            <Button
              type="button"
              className="w-1/2 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => loginAsGuest("student")}
            >
              Login as Guest Student
            </Button>
            <Button
              type="button"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-700 text-white"
              onClick={() => loginAsGuest("recruiter")}
            >
              Login as Guest Recruiter
            </Button>
          </div> */}

<div className="flex flex-col sm:flex-row justify-between gap-2 w-full">
  <Button
    type="button"
    className="w-full sm:w-1/2 min-w-[140px] bg-green-600 hover:bg-green-700 text-white"
    onClick={() => loginAsGuest("student")}
  >
    Login as Guest Student
  </Button>
  <Button
    type="button"
    className="w-full sm:w-1/2 min-w-[140px] bg-yellow-600 hover:bg-yellow-700 text-white"
    onClick={() => loginAsGuest("recruiter")}
  >
    Login as Guest Recruiter
  </Button>
</div>


          {/* Signup Link */}
          <p className="text-sm text-center text-gray-700 dark:text-gray-300 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 dark:text-blue-400">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
