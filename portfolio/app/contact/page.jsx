"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("access_key", "5cd70367-07ef-438a-8f7e-8ffbf9b15005");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      window.location.reload();
    } else {
      console.log("Error", res);
    }
  };

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
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input text-black" // Ensure text is visible
                  {...register("name", { required: true })}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="input text-black" // Ensure text is visible
                  {...register("email", { required: true })}
                />
              </div>
              <Textarea
                className="textarea h-[200px] text-black" // Ensure text is visible
                name="message"
                placeholder="Type your message here."
                {...register("message", { required: true })}
              />
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;