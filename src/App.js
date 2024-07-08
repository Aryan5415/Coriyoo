import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/shared/Header';
import Footer from './component/shared/Footer';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <MainScreen />
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
