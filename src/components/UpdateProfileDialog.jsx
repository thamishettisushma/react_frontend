import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null, // File input
    resumeURL: user?.profile?.resume || "", // Existing resume link
    resumeOriginalName: user?.profile?.resumeOriginalName || "View Resume",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    // Append new resume only if selected
    if (input.file) {
      formData.append("file", input.file);
    } else {
      formData.append("resumeURL", input.resumeURL);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="grid gap-3">
            {[
              {
                id: "fullname",
                label: "Full Name",
                type: "text",
                value: input.fullname,
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                value: input.email,
              },
              {
                id: "phoneNumber",
                label: "Phone Number",
                type: "text",
                value: input.phoneNumber,
              },
              { id: "bio", label: "Bio", type: "text", value: input.bio },
              {
                id: "skills",
                label: "Skills",
                type: "text",
                value: input.skills,
                placeholder: "Comma-separated skills",
              },
            ].map(({ id, label, type, value, placeholder }) => (
              <div
                key={id}
                className="flex flex-col sm:flex-row sm:items-center gap-2"
              >
                <Label htmlFor={id} className="sm:w-1/3">
                  {label}
                </Label>
                <Input
                  id={id}
                  name={id}
                  type={type}
                  value={value}
                  onChange={changeEventHandler}
                  className="flex-1"
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}

            {/* Resume Upload & Existing Resume */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Label htmlFor="file" className="sm:w-1/3">
                Resume
              </Label>
              <div className="flex-1 space-y-2">
                {/* Show existing resume link if available */}
                {input.resumeURL && (
                  <a
                    href={input.resumeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline block"
                  >
                    {input.resumeOriginalName}
                  </a>
                )}
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
