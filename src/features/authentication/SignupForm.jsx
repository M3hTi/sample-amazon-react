import Form from "../../ui/Form";
import GoHome from "../../ui/GoHome";

function SignupForm() {
  return (
    <>
      <div className="flex h-screen items-center">
        <Form type="signUp" />;
      </div>
      <GoHome />
    </>
  );
}

export default SignupForm;
