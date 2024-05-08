'use client'
import AOS from 'aos';
import { useEffect } from 'react';
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import SoloPro from "@/components/SoloPro";
import BgImage from '@/components/BgImage';
import Footer from '@/components/Footer';
import Box from '@/components/Box';

export default function Home() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
<div>
<Hero/>
<SoloPro/>
<Feature/>
<BgImage/>
<Box/>
<Footer/>
</div>
  );
}
