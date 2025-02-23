// import React from "react";
// import Footer from "./Footer";

// import Image from "next/image";

// const AboutUs = () => {
//   const steps = [
//     {
//       title: "Excellence",
//       description:
//         "We strive for excellence in everything we do. We are committed to delivering exceptional quality, innovative strategies, and outstanding results for our clients. We continuously improve our skills, stay updated with industry trends, and set high standards to achieve excellence in digital marketing.",
//     },
//     {
//       title: "Integrity",
//       description:
//         "We uphold the highest ethical standards and operate with integrity in all our actions. We are transparent, honest, and trustworthy in our dealings with clients, partners, and team members. We prioritize building long-term relationships based on mutual respect, reliability, and ethical conduct.",
//     },
//     {
//       title: "DEI (Diversity, Equity & Inclusion)",
//       description:
//         "We firmly believe in creating a workplace that embraces the unique perspectives and experiences of all individuals. We actively promote equal opportunities and strive to dismantle systemic barriers. By fostering an inclusive environment, we empower every team member to contribute their best, ensuring that all voices are heard, respected, and valued..",
//     },
//     {
//       title: "Impact",
//       description:
//         "We are driven by the desire to make a positive impact. We aim to empower purpose-driven brands to achieve their goals, amplify their messages, and create meaningful change. We measure success not only by numbers but also by the positive influence we have on our clients, their audiences, and the communities they serve.",
//     },
//   ];
//   return (
//     <section className="overflow-x-hidden">
//       <div>
//         {/* <ThreePage
//           title={pageInfo[8].title}
//           description={pageInfo[8].description}
//         /> */}
//       </div>
//       <div className="text-center py-16 md:py-24 lg:py-32">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10 md:mb-16 lg:mb-20">
//           Contact Us
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
//           {/* By Phone Section */}
//           <div className="flex flex-col items-center mb-8 md:mb-0">
//             <Image
//               src="/svgs/phone.svg"
//               alt="Phone icon"
//               width={200}
//               height={200}
//               className="mb-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
//             />
//             <h3 className="text-base md:text-lg font-semibold mb-2">
//               By Phone
//             </h3>
//             <p className="text-gray-400 text-sm md:text-base">
//               +91 - 6390252255
//             </p>
//             <p className="text-gray-400 text-sm md:text-base">
//               +91 - 7565988912
//             </p>
//           </div>

//           {/* Address Section */}
//           <div className="flex flex-col items-center mb-8 md:mb-0">
//             <Image
//               src="/svgs/address.svg"
//               alt="Location icon"
//               width={200}
//               height={200}
//               className="mb-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
//             />
//             <h3 className="text-base md:text-lg font-semibold mb-2">Address</h3>
//             <p className="text-gray-400 text-sm md:text-base">
//               Jhansi, Gwalior, Sonagir
//             </p>
//           </div>

//           {/* By Email Section */}
//           <div className="flex flex-col items-center">
//             <Image
//               src="/svgs/email.svg"
//               alt="Email icon"
//               width={200}
//               height={200}
//               className="mb-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
//             />
//             <h3 className="text-base md:text-lg font-semibold mb-2">
//               By E-mail
//             </h3>
//             <p className="text-gray-400 text-sm md:text-base">
//               dayabhawnafoundation@gmail.com
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* <div className="text-center py-16 md:py-24 lg:py-36 px-4">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-16 lg:mb-20">
//           Our Mission
//         </h2>
//         <p className="text-sm md:text-base lg:text-lg text-gray-500 max-w-5xl mx-auto mb-4 md:mb-8">
//           We are a passionate team of deep thinkers, strategists and problem
//           solvers. We believe that every purpose-driven brand has a unique story
//           to tell and powerful ideas to share.
//         </p>
//         <p className="text-sm md:text-base lg:text-lg text-gray-500 max-w-5xl mx-auto">
//           Our mission is to provide the strategies and expertise necessary to
//           help ambitious brands effectively spread their ideas, build deep
//           connections with their target audiences, and create meaningful change.
//         </p>
//       </div>
//       <div className="mx-auto py-10 px-4">
//         <div className="mx-auto max-w-5xl">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
//             Our Core Advantages
//           </h2>
//         </div>

//         <div className="w-full max-w-4xl mx-auto mt-10">
//           <div className="py-6 md:py-8 border-b border-gray-900">
//             <div className="flex justify-between items-center">
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
//                 Industry Expertise
//               </h3>
//             </div>
//           </div>
//           <div className="py-6 md:py-8 border-b border-gray-900">
//             <div className="flex justify-between items-center">
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
//                 Results Driven Approach
//               </h3>
//             </div>
//           </div>
//           <div className="py-6 md:py-8 border-b border-gray-900">
//             <div className="flex justify-between items-center">
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
//                 Customized Solutions
//               </h3>
//             </div>
//           </div>
//           <div className="py-6 md:py-8 border-b border-gray-900">
//             <div className="flex justify-between items-center">
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
//                 Collaboration & Transparency
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div className="py-16 bg-white flex flex-col items-center min-h-screen px-4">
//         <div className="w-full max-w-5xl mb-10">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
//             We Believe In
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto pb-16 md:pb-20 lg:pb-28">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center mb-8 sm:mb-0">
//               <Image
//                 src="/svgs/about1.svg"
//                 width={232}
//                 height={24}
//                 alt={`Step ${index + 1}`}
//                 className="w-full max-w-[232px]"
//               />
//               <h3 className="text-base md:text-lg my-4 md:my-6 lg:my-8 font-semibold text-gray-800 mb-2 md:mb-4 w-full">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 text-sm md:text-base w-full">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </section>
//   );
// };

// export default AboutUs;