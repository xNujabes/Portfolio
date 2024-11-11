
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjecSection from "@/app/components/ProjecSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mx-auto px-12 mt-24">
            <HeroSection />
            <AboutSection />
            <ProjecSection />

        </div>
    </main>
  );
}
