import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="service/:serviceId" element={<ServiceDetail />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
