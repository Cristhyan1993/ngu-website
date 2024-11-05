import {Magra} from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const magra = Magra({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const metadata = {
  title: "NGU Website",
  description: "Never Give Up CrossFit La Paz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-BO">
      <body className={magra.className}>
        <Navbar />
        <div className="container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
