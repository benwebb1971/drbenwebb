import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* ✅ Navbar should now be visible */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
