import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

const useVerify = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))

  const handleVerify = async () => {
    try {
      const result = await axios.get("check", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      return result;
    } catch (error) {
      const errorMessage = error?.response?.data?.error
        ? error?.response?.data?.message?.toString()
        : error?.message?.toString();
      console.log("error", errorMessage)
      navigate("/login", { replace: true });
    }
  };
  return handleVerify;
};

export default useVerify;
