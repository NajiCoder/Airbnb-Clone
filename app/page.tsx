import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-amber-400 text-2xl">
      <h1>Hello There</h1>
    </div>
  );
}
