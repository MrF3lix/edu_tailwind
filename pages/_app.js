import Script from 'next/script'
import { Header } from '../components/header'
import '../styles/globals.scss'
import 'react-flow-renderer/dist/style.css';
import '../styles/theme-custom.scss';

const App = ({ Component, pageProps }) => (
    <>
        <Script
            src="/theme.js"
            strategy="beforeInteractive"
        />
        <div className="flex flex-col min-h-[100vh] bg-white dark:bg-gray-900">
            <Header />
            <div className="flex-1">
                <Component {...pageProps} />
            </div>
        </div>
    </>
)

export default App