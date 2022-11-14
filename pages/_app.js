import { ThemeProvider } from "next-themes"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
