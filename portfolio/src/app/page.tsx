
"use client";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjecSection from "@/app/components/ProjecSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";




export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#121212] h-full">
        <Navbar />
        <div className="container mx-auto px-12 mt-24">
            <HeroSection />
            <AboutSection />
            <ProjecSection />
            <EmailSection />
            <Footer />
        </div>
    </main>
  );
}
