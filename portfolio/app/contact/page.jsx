"use client"; 

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem} from "../../components/ui/select";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("access_key", "5cd70367-07ef-438a-8f7e-8ffbf9b15005");
    formData.append("name", data.name);
    formData.append("file", data.file[0]);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    } else {
      console.log("Error", res);
    }
  };

  // Define the info array with the necessary data
  const info = [
    {
      icon: "📧", // Replace with actual icon component if needed
      title: "Email",
    },
    {
      icon: "📞", // Replace with actual icon component if needed
      title: "Phone",
    },
    // Add more items as needed
  ];

  return (
    <motion.section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-4xl text-blue-600">Let&apos;s Work Together</h3>
              <p className="text-white/60">
                I am currently accepting new freelance projects. If you have a project in mind, I would love to hear from you. Please fill out the form below and I will get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} {...register("firstname")} />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} {...register("lastname")} />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} {...register("email")} />
                <Input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} {...register("phone")} />
              </div>
              <Select name="service" value={formData.service} onChange={handleChange} {...register("service")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Bug Fixing">Bug Fixing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                {...register("message")}
              />
              <input type="file" {...register("file")} />
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:[72px] xl:[72px] bg-[#27272c] text-blue-600 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;