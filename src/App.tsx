import { Header } from "./components/Header";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Solution } from "./pages/Solutions";




export function App() {

  return (
    <>
      <Header />
      <Home />
      <Solution/>
      <Contact />
    </>
  )
}