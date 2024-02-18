import ChooseTrip from '@/components/home/choose-trip.js'
import Offers from '@/components/home/offers.js'
import Guides from '@/components/home/guides.js'

export default function Content() {
  return (
    <section id = 'content'>
      <ChooseTrip />
      <Offers />
      <Guides />
    </section>
  )
}