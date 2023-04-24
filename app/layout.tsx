import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* Navbar */}
        {/* wrap the navbar in the ClientOnly component to prevent the hydration error from happening */}
        <ClientOnly>
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
