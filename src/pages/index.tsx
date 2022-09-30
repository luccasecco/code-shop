import { GetStaticProps } from 'next';
import Image from "next/image"
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe';

import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";


import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe';
import Link from 'next/link';
import { formatCurrencyString } from 'use-shopping-cart';
import { useState } from 'react';

type ProductProps = {
  name: string
  id: string
  imageUrl: string
  price: string
  description: string
  priceNotFormatted: number
  priceId: string
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
  })

  return (
    <SliderContainer>
      <Head>
        <title>Home | Code Shop</title>
      </Head>


      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}

      </HomeContainer>
      {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
    </SliderContainer>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0] ?? '',
      price: formatCurrencyString({
        currency: 'BRL',
        value: price.unit_amount,
        language: 'pt-BR',
      }),
      priceId: price.id,
      description: product.description,
      priceNotFormatted: price.unit_amount,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
