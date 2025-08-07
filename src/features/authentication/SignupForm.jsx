import Form from "../../ui/Form";
import GoHome from "../../ui/GoHome";

function SignupForm() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <Form type="signUp" />
      </div>
      <GoHome />
    </>
  );
}

export default SignupForm;
