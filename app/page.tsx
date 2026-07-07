import Hero from '@/components/ui/hero';
import ProfileSection from '@/components/ui/ProfileSection';
import ServicesSection from '@/components/ui/ServicesSection';
import BimwinWidget from '@/components/ui/BimwinWidget';
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <ProfileSection />
      <BimwinWidget />
      <ServicesSection />
      <Footer />
    </div>
  );
}