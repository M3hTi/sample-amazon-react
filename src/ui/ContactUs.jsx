import Form from "./Form";
import GoHome from "./GoHome";

function ContactUs() {
  return (
    <div className="relative min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Form type="contactUs" />
      <GoHome />
    </div>
  );
}

export default ContactUs;
