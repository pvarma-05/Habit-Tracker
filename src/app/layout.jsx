import "./globals.css";
import { Outfit, Poppins } from "next/font/google";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"], // Specify subsets as needed
  variable: "--font-outfit",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"], // Specify subsets as needed
  variable: "--font-poppins",
});


export const metadata = {
  title: "Welcome to Habit Tracker",
  description: "Achieve Your New Goals with our Habit Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
