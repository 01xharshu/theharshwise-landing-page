import Navbar from "@/components/Navbar";
import "./globals.css";
import Hero from "@/components/Hero";
import Course from "@/components/Course";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import BelowC from "@/components/BelowC";

export const metadata = {
  title: "TheHarshWise",
  description: "Welcome to TheHarshWise, we'll help you become productive and proactive.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <Hero />
      <Course />
      <BelowC />
      <Cta />
      <Footer />
      </body>
    </html>
  );
}
