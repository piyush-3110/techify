// import "tailwindcss/tailwind.css";

// export default function Contact() {
//   return (
//     <div>
//       <section className="relative text-gray-700 body-font">
//         <div className="container px-5 py-2 mx-auto ">
//           <div className="flex flex-col w-full mb-12 text-center">
//             <p className="mx-auto text-base leading-relaxed lg:w-2/3">
//               Send your mail{" "}
//               <span>
//                 <a
//                   href="mailto:someone@example.com"
//                   className="text-indigo-500"
//                 >
//                   someone@example.com
//                 </a>
//               </span>{" "}
//               or type your message her
//             </p>
//           </div>
//           <div className="mx-auto lg:w-1/2 md:w-2/3">
//             <div className="flex flex-wrap -m-2">
//               <div className="w-1/2 p-2">
//                 <div className="relative">
//                   <label
//                     htmlFor="name"
//                     className="text-sm leading-7 text-indigo-600"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Enter your name"
//                     className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
//                   />
//                 </div>
//               </div>
//               <div className="w-1/2 p-2">
//                 <div className="relative">
//                   <label
//                     htmlFor="email"
//                     className="text-sm leading-7 text-indigo-500"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter you email"
//                     className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
//                   />
//                 </div>
//               </div>
//               <div className="w-full p-2">
//                 <div className="relative">
//                   <label
//                     htmlFor="message"
//                     className="text-sm leading-7 text-indigo-500"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Type your message"
//                     className="w-full h-32 px-3 py-1 text-base leading-6 text-black transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="w-full p-2">
//                 <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
//                   Send
//                 </button>
//               </div>
//               <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
//                 <p className="my-5 leading-normal">
//                   Chandigarh
//                   <br />
//                   Kharar
//                 </p>
//                 <span className="inline-flex">
//                   <a className="text-gray-500">
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                     </svg>
//                   </a>
//                   <a className="ml-4 text-gray-500">
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                     </svg>
//                   </a>
//                   <a className="ml-4 text-gray-500">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <rect
//                         width="20"
//                         height="20"
//                         x="2"
//                         y="2"
//                         rx="5"
//                         ry="5"
//                       ></rect>
//                       <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                     </svg>
//                   </a>
//                   <a className="ml-4 text-gray-500">
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                     </svg>
//                   </a>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

function Contact() {
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
                        autoComplete="email"
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
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-blue-800 rounded-md font-xl sm:mb-0"
                  >
                    Send Message
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
