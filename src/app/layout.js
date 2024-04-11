import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";
import { Inter as FontSans } from "next/font/google";

const Kantumruy = Kantumruy_Pro({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Kantumruy.className}>
        <>
          <NavbarComponent />
          {children}
        </>
      </body>
    </html>
  );
}
