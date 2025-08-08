import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { logout as logoutAPI } from "../../services/apiAuthentication";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: loggingOut } = useMutation({
    mutationFn: logoutAPI,

    onSuccess: () => {
      toast.success("you successfully logged out!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { logout, loggingOut };
}
