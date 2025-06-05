import Form from "../ui/Form";
import GoHome from "../ui/GoHome";

function ContactUs() {
  return (
    <div className="relative min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Form type="contactUs" />
      <GoHome />
    </div>
  );
}

export default ContactUs;
