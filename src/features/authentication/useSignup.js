import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signup } from "../../services/apiAuthentication";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signupFn, isPending: signingup } = useMutation({
    mutationFn: ({ email, password, name }) => signup({ email, password, name }),

    onSuccess: () => {
      toast.success("You Successfully siging up");
      navigate("/account", { replace: true });
    },

    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  return { signupFn, signingup };
}
