import Header from "@/components/header";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import enMessages from "@/locales/en.json";
import frMessages from "@/locales/fr.json";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const preferredLocale =
    router.locale ??
    (typeof window !== "undefined" && window.navigator.language?.startsWith("fr")
      ? "fr"
      : "en");

  const messages =
    pageProps.messages ?? (preferredLocale === "fr" ? frMessages : enMessages);

  return (
    <NextIntlClientProvider
      locale={preferredLocale}
      messages={messages}
      timeZone="Africa/Douala"
    >
      <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
