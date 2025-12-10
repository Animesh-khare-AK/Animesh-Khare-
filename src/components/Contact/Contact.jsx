import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send email to the admin (you)
    const sendToAdmin = emailjs.sendForm(
      "service_usnclfx",
      "template_y2yfqru",
      form.current,
      "BlA0x2w9MNdWchpny"
    );

    // 2. Send confirmation email to the user
    // IMPORTANT: You must create a second template in EmailJS for the auto-reply
    // and replace "template_autoreply" below with your new Template ID.
    const sendToUser = emailjs.sendForm(
      "service_usnclfx",
      "template_qcbm9jn", // REPLACE THIS with your new Auto-Reply Template ID
      form.current,
      "BlA0x2w9MNdWchpny"
    );

    Promise.all([sendToAdmin, sendToUser]).then(
      () => {
        setIsSent(true);
        form.current.reset(); // Reset form fields after sending
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
      (error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        {/* Contact Info */}
        <div className="text-center text-gray-300 mt-3">
          <p className="text-sm">Phone: <a className="text-white underline" href="tel:+9197987037563">+91 7987037563</a></p>
          <p className="text-sm">Email: <a className="text-white underline" href="mailto:animeshkhare0001@gmail.com">animeshkhare0001@gmail.com</a></p>
          <p className="text-sm">LinkedIn: <a className="text-white underline" href="https://www.linkedin.com/in/animesh-khare-5b66342a4/" target="_blank" rel="noopener noreferrer">animesh-khare</a></p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
