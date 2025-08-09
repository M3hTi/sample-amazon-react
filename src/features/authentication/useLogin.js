import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../services/apiAuthentication";
export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: logging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("You Successfully login");
      navigate("/", { replace: true });
    },

    onError: () => {
      toast.error("Please Provide valid Email or Password!");
    },
  });

  return { login, logging };
}
