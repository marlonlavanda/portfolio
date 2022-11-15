import { ThemeProvider } from "next-themes"
import { AppWrapper } from "../context/state"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppWrapper>
  )
}

export default MyApp
