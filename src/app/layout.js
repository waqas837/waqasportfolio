import Header from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title:
    "Affordable Websites | Quality Web Development at Budget-Friendly Prices",
  description:
    "Get professional, affordable websites designed to grow your business. Fast, responsive, and tailored web development solutions that fit your budget",
};

export default async function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`bg-gray-950 text-gray-100 scroll-smooth`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics Setup */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0CZXLNN8LK`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0CZXLNN8LK');
            `,
          }}
        />
        {/* Modern GA4 integration */}
        <GoogleAnalytics gaId="G-0CZXLNN8LK" />
      </body>
    </html>
  );
}
