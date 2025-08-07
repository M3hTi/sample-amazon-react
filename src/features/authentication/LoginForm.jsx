import Button from "../../ui/Button";
import Form from "../../ui/Form";
import GoHome from "../../ui/GoHome";
function LoginForm() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <Form type="login" />
        <p className="my-2">
          if You have don't An Account, Please first SignUp
        </p>
        <Button
          to="/signup"
          className="w-sm cursor-pointer rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 py-4 text-center text-lg font-semibold text-white transition duration-150 hover:bg-blue-700"
        >
          SignUp
        </Button>
      </div>
      <GoHome />
    </>
  );
}

export default LoginForm;
