import Header from "@/components/header";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
  
      <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      >
        <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
        <Layout>
        <Component {...pageProps} />
        </Layout>
       
        </ThemeProvider>
    </NextIntlClientProvider>
      
   
  );
}
