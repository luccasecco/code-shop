import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"
import { ArrowArcLeft, ArrowArcRight } from 'phosphor-react'

import { HomeContainer, Product } from "../styles/pages/home";
import 'keen-slider/keen-slider.min.css'

import camiseta4 from '../assets/4.png'

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta4} />
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} />
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} />
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} />
      </Product>
    </HomeContainer>
    /* <button onClick={() => instanceRef.current.next()}><ArrowArcRight /></button>
    <button onClick={() => instanceRef.current.prev()}><ArrowArcLeft /></button> */
  )
}
