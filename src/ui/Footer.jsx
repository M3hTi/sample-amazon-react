import AboutUs from "./AboutUs";
import CustomerServie from "./CustomerService";
import SocialAccounts from "./SocialAccounts";

function Footer() {
  return (
    <footer className="mt-12 bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <AboutUs />
          <CustomerServie />
          <SocialAccounts />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
