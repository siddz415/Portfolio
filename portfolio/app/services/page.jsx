"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Skilled web developer with a focus on creating high-quality websites that are fast, reliable, and user-friendly, helping you reach your target audience and achieve your business goals.",
    },
    {
        num: "02",
        title: "App Development",
        description: "Skilled app developer with a focus on creating high-quality mobile applications for iOS and Android devices. I build custom apps that are fast, reliable, and user-friendly, helping you reach your target audience and achieve your business goals.",
      },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Creative UI/UX designer with a keen eye for detail and a passion for crafting intuitive, user-friendly interfaces. I create visually stunning designs that enhance user experience and drive engagement.",
    },
    {
        num: "04",
        title: "Logo Design",
        description: "Creative logo designer with a focus on creating unique, memorable logos that reflect your brand identity and resonate with your target audience. I design logos that are visually appealing, versatile, and timeless.",
      },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top  */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href="/"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-600 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-600 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description  */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;