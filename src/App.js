import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
// import Navbar from './components/Navbar1/Navbar'
// import Navbar from './components/Navbar2/Navbar';
import Navbar from './components/Navbar3/Navbar';
import { Home, About, Models, Contact } from './components/pages/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
