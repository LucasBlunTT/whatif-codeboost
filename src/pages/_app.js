import { Header } from "../components/header"
import { Footer } from "../components/footer";
import { GlobalStyles } from "../styles/global"

GlobalStyles()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
