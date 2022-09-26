import { AppProps } from "next/app"
import Image from "next/image"
import { ShoppingCartSimple } from 'phosphor-react'
import { globalStyles } from "../styles/global"

import logoImg from '../assets/code-logo.svg'
import { Container, Header } from "../styles/pages/app"
import Link from "next/link"

globalStyles()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <div className="logo-container">
          <Link href="/">
            <Image src={logoImg} width={150} height={135} alt="logo" />
          </Link>
          <span>.Shop</span>
        </div>
        <button><ShoppingCartSimple size={32} weight="fill" /></button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )


}

export default MyApp
