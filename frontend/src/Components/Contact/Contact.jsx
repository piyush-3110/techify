import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://techify-iota.vercel.app/send-email",
        {
          name: name,
          email: email,
          message: message,
        }
      );
      setLoading(false);
      toast.success(response.data);
      console.log(response);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-5">
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-1 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur aspernatur id libero, perspiciatis distinctio
                facilis earum aperiam, deleniti nam quisquam quis sint magni
                necessitatibus reprehenderit esse asperiores dolorem nobis
                error.
              </p>
              <ul className="mb-2 md:mb-0">
                <li className="flex">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="mb-4 ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Chandigarh, Gharuan
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Kharar, CU
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="mb-4 ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +91 1234567899
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: tailnext@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="mb-4 ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="max-w-6xl p-5 card h-fit md:p-12" id="form">
              <h2 className="mb-2 text-2xl font-bold">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs tracking-wider uppercase"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs tracking-wider uppercase"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        value={email}
                        placeholder="Your email address"
                        className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs tracking-wider uppercase"
                    ></label>
                    <textarea
                      id="textarea"
                      onChange={(e) => setMessage(e.target.value)}
                      name="textarea"
                      cols="30"
                      rows="5"
                      value={message}
                      placeholder="Write your message..."
                      className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="w-full px-6 py-3 text-white bg-blue-800 rounded-md font-xl sm:mb-0"
                  >
                    {loading ? (
                      <ClipLoader
                        color="#ffffff"
                        loading={loading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
