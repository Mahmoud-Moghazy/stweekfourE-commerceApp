import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 md:gap-3">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Your Email"
            className="bg-neutral-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Your Phone"
            className="bg-neutral-100 p-2 rounded-md w-full"
          />
        </div>
      </div>
      <div className="flex-grow">
        <textarea
          placeholder="Your Message"
          className="bg-neutral-100 min-h-40 w-full h-full p-2 rounded-md resize-none"
        />
      </div>
      <button className="bg-red-500 text-white w-fit py-2 px-8 rounded self-end">
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
