import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/global/navbar";
import Footer from "../components/global/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Head>
        <title>The Vachan MN Blog</title>
        <meta name="description" content="The Vachan MN Blog" />
        <meta
          name="keywords"
          content="Vachan MN, Vachan, MN, VachanMN, VachanMNBlog, VachanMN's Blog, VachanMN's Website, VachanMN's Portfolio, VachanMN's Pro"
        />
        <meta name="author" content="Vachan MN" />
      </Head>
      <NavBar />
      <center>
        <Component {...pageProps} />
      </center>
      <Footer />
    </div>
  );
}

export default MyApp;
