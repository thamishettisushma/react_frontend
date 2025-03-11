import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";


const LogoutDialog=()=> {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
    setOpen(false);
  };

  return (
    // <>
    //   <Button variant="outline" onClick={() => setOpen(true)}>
    //     Logout
    //   </Button>
    //   <Dialog open={open} onOpenChange={setOpen}>
    //     <DialogContent>
    //       <DialogHeader>
    //         <DialogTitle>Confirm Logout</DialogTitle>
    //       </DialogHeader>
    //       <p>Are you sure you want to log out?</p>
    //       <DialogFooter>
    //         <Button variant="outline" onClick={() => setOpen(false)}>
    //           Cancel
    //         </Button>
    //         <Button variant="destructive" onClick={logoutHandler}>
    //           Logout
    //         </Button>
    //       </DialogFooter>
    //     </DialogContent>
    //   </Dialog>
    // </>

    <>
      <Button
        variant="outline"
        className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setOpen(true)}
      >
        Logout
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[90%] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 shadow-lg rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Confirm Logout
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 dark:text-gray-300">
            Are you sure you want to log out?
          </p>
          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default LogoutDialog

