import Image from "next/image";
import { useState } from "react";
import usernameIcon from "../assets/icons/Icon.png";
import callIcon from "../assets/icons/callIcon.png";
import emailIcon from "../assets/icons/email.png";
import messageIcon from "../assets/icons/message.png";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]*$/, "Invalid phone number, please enter numbers only")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitting(true);
      console.log(data);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Unable to submit. Try again shortly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.8)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white">Let&apos;s build what matters</h2>
          <p className="text-sm text-white/70">
            Tell us about your next project, site requirement, or equipment need. Our geomatics experts respond within one business day.
          </p>
          <div className="space-y-4 text-sm text-white/80">
            <div>
              <p className="font-semibold text-white">Office Hours</p>
              <p>Mon–Fri: 08:30–17:30 | Sat: 08:30–13:30 (Yaoundé)</p>
            </div>
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p>677355166 / 659796533 / 673521060</p>
            </div>
            <div>
              <p className="font-semibold text-white">WhatsApp</p>
              <p>677355166 / 697204969 / +4917659729775 / 690462359</p>
            </div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <p>constrctr@restate.com</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.8)] backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "First Name", name: "firstName", icon: usernameIcon },
              { label: "Last Name", name: "lastName", icon: usernameIcon },
            ].map((field) => (
              <label key={field.name} className="relative block">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  {field.label}
                </span>
                <input
                  {...register(field.name)}
                  name={field.name}
                  placeholder={field.label}
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <Image
                  src={field.icon}
                  alt={`${field.label} icon`}
                  className="pointer-events-none absolute right-4 top-12 h-5 w-5 opacity-60"
                />
                {errors[field.name as keyof typeof errors] && (
                  <p className="mt-1 text-xs text-rose-400">required</p>
                )}
              </label>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="relative block">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Email
              </span>
              <input
                {...register("email")}
                name="email"
                placeholder="Email Address"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Image
                src={emailIcon}
                alt="email icon"
                className="pointer-events-none absolute right-4 top-12 h-5 w-5 opacity-60"
              />
              {errors.email && <p className="mt-1 text-xs text-rose-400">required</p>}
            </label>
            <label className="relative block">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Phone
              </span>
              <input
                {...register("phoneNumber")}
                name="phoneNumber"
                placeholder="Phone Number"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Image
                src={callIcon}
                alt="phone icon"
                className="pointer-events-none absolute right-4 top-12 h-5 w-5 opacity-60"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-rose-400">required</p>
              )}
            </label>
          </div>

          <label className="relative block">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Message
            </span>
            <textarea
              {...register("message")}
              name="message"
              placeholder="Tell us about your project or equipment requirement"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <Image
              src={messageIcon}
              alt="message icon"
              className="pointer-events-none absolute right-4 top-20 h-5 w-5 opacity-60"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400">required</p>
            )}
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-slate-950 shadow-lg shadow-cyan-500/50 transition hover:scale-[1.01]"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Send Request"}
          </button>
          <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} draggable pauseOnHover theme="dark" />
        </form>
      </div>
    </section>
  );
};

export default Form;
