import type { AppProps, NextWebVitalsMetric /*, AppContext */ } from 'next/app'
import '../styles/globals.scss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  console.log(metric)
}

export default App
