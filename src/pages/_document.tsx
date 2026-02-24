import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

type DocumentProps = DocumentInitialProps & { locale?: string };

export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale ?? "en"}>
      <Head>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="theme-color" content="#0f1624" />
        <meta name="author" content="Kassandrale Mognitou" />
        <meta name="creator" content="Kassandrale Mognitou" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await NextDocument.getInitialProps(ctx);
  return {
    ...initialProps,
    locale: ctx.locale ?? "en",
  };
};
