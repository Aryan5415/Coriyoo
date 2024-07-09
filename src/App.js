import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/shared/Header';
import Footer from './component/shared/Footer';
import MainScreen from './assets/pages/MainScreen';
import EventList from './assets/pages/EventList';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/eventlist" element={<EventList/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
