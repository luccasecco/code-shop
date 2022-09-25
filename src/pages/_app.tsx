import { AppProps } from "next/app"
import Image from "next/image"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/code-logo.svg'
import { Container, Header } from "../styles/pages/app"

globalStyles()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={180} height={120} alt="logo" /> <span>.Shop</span>
      </Header>

      <Component {...pageProps} />
    </Container>
  )


}

export default MyApp
