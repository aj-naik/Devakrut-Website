import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MyApp({ Component, pageProps,time }) {
  
  return <Component {...pageProps} />
}
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  console.log(new Date().toISOString());

  return {
  }
}
export default MyApp
