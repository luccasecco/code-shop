import { AppProps } from "next/app"
import Image from "next/image"
import { ShoppingCartSimple } from 'phosphor-react'
import { globalStyles } from "../styles/global"

import logoImg from '../assets/code-logo.svg'
import { Container, Header } from "../styles/pages/app"

globalStyles()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <div className="logo-container">
          <Image src={logoImg} width={100} height={120} alt="logo" /> <span>.Shop</span>
        </div>
        <button><ShoppingCartSimple size={32} weight="fill" /></button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )


}

export default MyApp
