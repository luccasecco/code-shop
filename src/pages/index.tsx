import { GetStaticProps } from 'next';
import Image from "next/image"
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe';

import { HomeContainer, Product } from "../styles/pages/home";


import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe';
import Link from 'next/link';
import { formatCurrencyString } from 'use-shopping-cart';

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
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
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
    </>
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
