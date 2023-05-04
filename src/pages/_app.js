import { GlobalStyles } from "../styles/global"

GlobalStyles()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
