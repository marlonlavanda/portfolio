import Header from "../Header"
import Footer from "../Footer"
export default function Layout({ children }) {
  return (
    <div className="page-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
