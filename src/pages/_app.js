import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '../styles/vendors/index.scss'
import { GlobalStyle } from '../styles/global-styles'
import { Header } from 'src/components/All'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Next Commerce</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Header />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	)
}
