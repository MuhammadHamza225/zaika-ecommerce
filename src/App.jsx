import Store from "./components/Store"
import Categories from "./components/Categories"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Promotion from "./components/Promotion"
import Sale from "./components/Sale"
import Special from "./components/Special"
import Blogs from "./components/Blogs"
import Features from "./components/Features"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Contact from "./components/pages/Contact"
import Terms from "./components/pages/Terms"
import Privacy from "./components/pages/Privacy"
import Faq from "./components/pages/Faq"



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="terms" element={<Terms/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="faq" element={<Faq/>}/>
      </Routes>
    </Router>
  )
}

export default App
