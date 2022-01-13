import '../styles/globals.css';
import SideBar from "./components/sidebar/Sidebar-Component";
import NavBar from "./components/navbar/Navbar-Component";
import Footer from "./components/footer/Footer-Component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head';

function MyApp({ Component, pageProps, time }) {

  return (
    <>
      <div className="container">
        <Head>
          <title>Devakrut Oils</title>
          <link rel="icon" href="/main_logo.svg" />
        </Head>
      </div>
      <div className="desktop">
        <NavBar />
      </div>
      <div className="mobile">
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          customBurgerIcon={
            <img src="img/menu/hamburger-menu.svg" alt="menu" />
          }
          width={"50%"}
        />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export async function getServerSideProps({ query, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  );
  console.log(new Date().toISOString());
  return {};
}
export default MyApp
