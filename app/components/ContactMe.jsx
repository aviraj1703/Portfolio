"use client";

import React, { useState } from "react";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.message.value = "";

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (response.ok) {
        const resData = await response.json();
        console.log(resData);
        setEmailSubmitted(true);
      } else {
        const resData = await response.json();
        console.error(resData);
        setEmailSubmitted(false);
      }
    } catch (error) {
      console.error(error);
      setEmailSubmitted(false);
    }

    setTimeout(() => {
      setEmailSubmitted(null);
    }, 5000);
  };

  return (
    <section id="contact">
      <div className="md:grid md:grid-cols-2 gap-8 items-start mt-20 py-8 px-4 xl:gap-16 xl:py-16 xl:px-8 sm:py-16">
        <div className="flex flex-col items-center md:items-start gap-1">
          <h2 className="text-secondary text-lg text-center md:text-left md:text-2xl font-extrabold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-300">
              Let&apos;s connect..!
            </span>
          </h2>
          <p className="text-[#808080] text-md lg:text-lg mb-6">
            Let&apos;s connect and turn ideas into reality! Whether you&apos;re looking
            for a skilled developer or simply want to discuss innovative tech,
            I&apos;m excited to collaborate. Reach out, and let&apos;s make something
            incredible together!
          </p>
          <div className="w-fit flex items-center justify-start gap-4">
            <Link
              href="https://github.com/aviraj1703"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GitHubIcon}
                height={40}
                width={40}
                alt="GitHub Icon"
                className="border-2 bg-secondary rounded-full opacity-80 hover:opacity-100"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/avirajsinh-rathod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={LinkedinIcon}
                height={38}
                width={38}
                alt="LinkedIn Icon"
                className="border-2 bg-blue-700 rounded-md opacity-80 hover:opacity-100"
              />
            </Link>
          </div>
        </div>
        <div>
          <form className="h-full flex flex-col" onSubmit={handleSubmit}>
            <div className="my-3 flex flex-col items-start gap-2">
              <label
                htmlFor="email"
                className="text-secondary text-sm md:text-md font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="youremail@email.com"
                className="bg-slate-100 p-2 border-2 rounded-md w-full text-secondary"
              />
            </div>
            <div className="my-3 flex flex-col items-start gap-2">
              <label
                htmlFor="subject"
                className="text-secondary text-sm md:text-md font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Saying Hello..."
                className="bg-slate-100 p-2 border-2 rounded-md w-full text-secondary"
              />
            </div>
            <div className="my-3 flex flex-col items-start gap-2">
              <label
                htmlFor="message"
                className="text-secondary text-sm md:text-md font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Let&apos;s talk about..."
                className="bg-slate-100 p-2 border-2 rounded-md w-full text-secondary"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded-md text-white bg-gradient-to-br from-primary-500 via-primary-300 to-primary-600 font-bold hover:bg-slate-50 opacity-90 hover:opacity-100"
            >
              Send&nbsp;Email
            </button>
            {emailSubmitted === true && (
              <p className="my-2 text-green-500">
                Message has been sent successfully..!
              </p>
            )}
            {emailSubmitted === false && (
              <p className="my-2 text-red-500">
                There is some issue in sending message, try later!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
