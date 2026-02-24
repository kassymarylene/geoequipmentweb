import Head from 'next/head';
import { useTranslations } from "next-intl";
import HomePage from './home';

export default function Home() {
  const seo = useTranslations("seo");
  return (
    <>
      <Head>
        <title>{seo("title")}</title>
        <meta name="description" content={seo("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        
      </Head>
      <main>
        <div>
          <HomePage />
        </div>
      </main>
    </>
  );
 }
