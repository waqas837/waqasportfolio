import Header from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Muhammad Waqas Portfolio",
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
      </body>
    </html>
  );
}
