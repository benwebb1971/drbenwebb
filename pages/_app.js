import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* ✅ Ensures Navbar is visible on all pages */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
