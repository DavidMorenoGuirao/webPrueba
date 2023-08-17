import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Providers } from "./provider";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "RANDOMtech",
  description: "All about tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={openSans.className}
      lang="es"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <body style={{ maxWidth: "1400px" }}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
      <script
        id="dsq-count-scr"
        src="//randomtech-1.disqus.com/count.js"
        async
      ></script>
    </html>
  );
}
