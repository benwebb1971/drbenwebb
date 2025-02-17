import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* ✅ Navigation bar will be visible on all pages */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
