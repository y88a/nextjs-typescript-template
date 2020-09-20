import type { AppProps, NextWebVitalsMetric /*, AppContext */ } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );

}

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric)
}

export default App
