import { Link } from "react-router-dom";
import CallToUs from "../components/contact/CallToUs";
import ContactForm from "../components/contact/ContactForm";
import WriteToUs from "../components/contact/WriteToUs";

const Contact: React.FC = () => {
  return (
    <section className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={'/home'} className="text-gray-500">Home</Link>
        <span>/</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10">
        <div className="shadow rounded-lg flex flex-col gap-10 px-2 md:px-5 py-4 md:py-10">
          <CallToUs />
          <WriteToUs />
        </div>
        <div className="flex-grow shadow rounded-lg px-2 md:px-5 py-4 md:py-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
