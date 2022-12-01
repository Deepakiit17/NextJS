import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.css';

// import Navbar from "../components/Navbar"
import Nbar from "../harry/Nbar"

function MyApp({ Component, pageProps }) {
  return <>
  <Nbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
