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
import { useTranslations } from "next-intl";

type FormFieldName = "firstName" | "lastName" | "email" | "phoneNumber" | "message";

const Form = () => {
  const t = useTranslations("form");
  const schema = yup.object().shape({
    firstName: yup.string().required(t("errors.firstName")),
    lastName: yup.string().required(t("errors.lastName")),
    email: yup.string().email(t("errors.emailFormat")).required(t("errors.emailRequired")),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]*$/, t("errors.phoneFormat"))
      .required(t("errors.phoneRequired")),
    message: yup.string().required(t("errors.message")),
  });

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
      toast.success(t("toast.success"));
      reset();
    } catch (error) {
      console.error(error);
      toast.error(t("toast.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-reveal className="reveal bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.8)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-accent/80">
            {t("sectionLabel")}
          </p>
          <h2 className="text-4xl font-semibold text-white">{t("title")}</h2>
          <p className="text-base text-white/70">
            {t("description")}
          </p>
          <div className="space-y-4 text-sm text-white/80">
            <div>
              <p className="font-semibold text-accent">{t("officeHoursLabel")}</p>
              <p>{t("officeHoursValue")}</p>
            </div>
            <div>
              <p className="font-semibold text-accent">{t("phoneLabel")}</p>
              <p className="font-medium text-white">{t("phoneValue")}</p>
            </div>
            <div>
              <p className="font-semibold text-accent">{t("whatsappLabel")}</p>
              <p className="font-medium text-white">{t("whatsappValue")}</p>
            </div>
            <div>
              <p className="font-semibold text-accent">{t("emailLabel")}</p>
              <p className="font-medium text-white">{t("emailValue")}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.8)] backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {(
              [
                { label: t("fields.firstName"), name: "firstName" as FormFieldName, icon: usernameIcon },
                { label: t("fields.lastName"), name: "lastName" as FormFieldName, icon: usernameIcon },
              ]
            ).map((field) => (
              <label key={field.name} className="relative block">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  {field.label}
                </span>
                <input
                  {...register(field.name)}
                  name={field.name}
                  placeholder={field.label}
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
                <Image
                  src={field.icon}
                  alt={`${field.label} icon`}
                  className="pointer-events-none absolute right-4 top-12 h-5 w-5 opacity-60"
                />
                {errors[field.name as keyof typeof errors] && (
                  <p className="mt-1 text-xs text-rose-400">
                    {String(errors[field.name as keyof typeof errors]?.message ?? t("errors.required"))}
                  </p>
                )}
              </label>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="relative block">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                {t("fields.email")}
              </span>
              <input
                {...register("email")}
                name="email"
                placeholder={t("placeholders.email")}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <Image
                src={emailIcon}
                alt="email icon"
                className="pointer-events-none absolute right-4 top-12 h-5 w-5 opacity-60"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-400">
                  {String(errors.email?.message ?? t("errors.required"))}
                </p>
              )}
            </label>
            <label className="relative block">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                {t("fields.phone")}
              </span>
              <input
                {...register("phoneNumber")}
                name="phoneNumber"
                placeholder={t("placeholders.phone")}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <Image
                src={callIcon}
                alt="phone icon"
                className="pointer-events-none absolute right-4 top-12 h-5 w-5 opacity-60"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-rose-400">
                  {String(errors.phoneNumber?.message ?? t("errors.required"))}
                </p>
              )}
            </label>
          </div>

          <label className="relative block">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              {t("fields.message")}
            </span>
            <textarea
              {...register("message")}
              name="message"
              placeholder={t("placeholders.message")}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-3 placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <Image
              src={messageIcon}
              alt="message icon"
              className="pointer-events-none absolute right-4 top-20 h-5 w-5 opacity-60"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400">
                {String(errors.message?.message ?? t("errors.required"))}
              </p>
            )}
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-accent py-3 text-sm font-semibold uppercase tracking-[0.4em] text-slate-900 shadow-lg shadow-[0_20px_60px_rgba(201,168,106,0.35)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-70"
            disabled={submitting}
          >
            {submitting ? t("submitting") : t("submit")}
          </button>
          <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} draggable pauseOnHover theme="dark" />
        </form>
      </div>
    </section>
  );
};

export default Form;
