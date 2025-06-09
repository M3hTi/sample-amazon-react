import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HiChat, HiClipboardList, HiLockClosed, HiMail } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

import Button from "../ui/Button";
import Error from "../ui/Error";

function Form({ type }) {
  const [sendingForm, setSendingForm] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      setSendingForm(false);
    }, 2000);
  }, [sendingForm]);

  function handleForm(data) {
    console.log(data);
    switch (type) {
      case "contactUs":
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            {
              publicKey: import.meta.env.VITE_PUBLIC_EMAILJS_KEY,
            },
          )
          .then(
            () => {
              console.log("SUCCESS!");
              //   console.log(data);
              setSendingForm(true);
              reset();
            },
            (error) => {
              console.log("FAILED...", error.message);
            },
          );
        console.log("contactUs");
        break;
      case "login":
        console.log("Login");
        break;
      case "signUp":
        console.log("signUp!");
        break;
      default:
        console.log(data);
        break;
    }
  }

  function onError(err) {
    console.log(err);
  }

  if (type === "contactUs")
    return (
      <form
        ref={form}
        onSubmit={handleSubmit(handleForm, onError)}
        className="mx-auto max-w-2xl space-y-8 rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Contact Us
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center text-sm font-medium text-yellow-400"
            >
              <HiUser className="mr-2 h-5 w-5" />
              Name
            </label>
            <input
              disabled={sendingForm}
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your name"
              {...register("name", {
                required: "Please enter your name",
              })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-yellow-400"
            >
              <HiMail className="mr-2 h-5 w-5 " />
              Email
            </label>
            <input
              disabled={sendingForm}
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="flex items-center text-sm font-medium text-yellow-400"
            >
              <HiClipboardList className="mr-2 h-5 w-5 " />
              Subject
            </label>
            <input
              disabled={sendingForm}
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="What is this regarding?"
              {...register("subject", {
                required: "Please enter a subject",
                minLength: {
                  value: 4,
                  message: "Subject must contain at least 4 characters",
                },
              })}
            />
            {errors.subject && <Error>{errors.subject.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center text-sm font-medium text-yellow-400"
            >
              <HiChat className="mr-2 h-5 w-5 " />
              Message
            </label>
            <textarea
              disabled={sendingForm}
              id="message"
              rows="4"
              name="message"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Write your message here..."
              {...register("message", {
                required: "Please enter your message",
                minLength: {
                  value: 10,
                  message: "Message must contain at least 10 characters",
                },
              })}
            ></textarea>
            {errors.message && <Error>{errors.message.message}</Error>}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={sendingForm}
            className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 py-4 text-lg font-semibold text-white transition duration-150 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-500"
          >
            {sendingForm ? "Submitting Your form..." : "Send Message"}
          </Button>
        </div>
      </form>
    );

  if (type === "login")
    return (
      <form
        onSubmit={handleSubmit(handleForm, onError)}
        className="mx-auto max-w-md space-y-6 rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Login
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <HiMail className="mr-2 h-5 w-5 " />
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <HiLockClosed className="mr-2 h-5 w-5 " />
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your password"
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white transition duration-150 hover:bg-blue-700"
          >
            Login
          </Button>
        </div>
      </form>
    );

  if (type === "signUp")
    return (
      <form
        onSubmit={handleSubmit(handleForm, onError)}
        className="mx-auto max-w-md space-y-6 rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Sign Up
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <HiUser className="mr-2 h-5 w-5 " />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Please enter your full name",
              })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <HiMail className="mr-2 h-5 w-5 " />
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <HiLockClosed className="mr-2 h-5 w-5 " />
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Create a password"
              {...register("password", {
                required: "Please enter a password",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <HiLockClosed className="mr-2 h-5 w-5 " />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <Error>{errors.confirmPassword.message}</Error>
            )}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white transition duration-150 hover:bg-blue-700"
          >
            Create Account
          </Button>
        </div>
      </form>
    );
}

export default Form;
