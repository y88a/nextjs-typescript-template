import type { AppProps, NextWebVitalsMetric /*, AppContext */ } from 'next/app'
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );

}

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric)
}

export default App
