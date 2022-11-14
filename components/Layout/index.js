import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Marlon Lavanda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
