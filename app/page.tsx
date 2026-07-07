import Hero from '@/components/ui/hero';
import ProfileSection from '@/components/ui/ProfileSection';
import ServicesSection from '@/components/ui/ServicesSection';
import BimwinWidget from '@/components/ui/BimwinWidget';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProfileSection />
      <BimwinWidget />
      <ServicesSection />
    </div>
  );
}