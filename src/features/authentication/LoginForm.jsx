import Button from "../../ui/Button";
import Form from "../../ui/Form";
import GoHome from "../../ui/GoHome";
function LoginForm() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <Form type="login" />
      </div>
      <GoHome />
    </>
  );
}

export default LoginForm;
