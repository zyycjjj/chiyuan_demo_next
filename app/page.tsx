import { Hero } from '../components/hero/Hero'
import { Showcase } from '../components/showcase/Showcase'
import { HowToUse } from '../components/how-to-use/HowToUse'
import { Features } from '../components/features/Features'
import { UseCases } from '../components/use-cases/UseCases'
import { Pricing } from '../components/pricing/Pricing'
import { FAQ } from '../components/faq/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <HowToUse />
      <Features />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  )
}
