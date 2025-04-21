import Navbar from './components/Navbar'
import Header from './components/Header'
import Journey from './components/Journey'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import About from './components/About'
import Testi from './components/Testi'
import Book from './components/Book'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Journey />
      <Philosophy />
      <Services />
      <About />
      <Testi />
      <Book />
      <Footer />
    </main>
  );
}
