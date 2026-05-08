import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetails from './pages/orderDetails';
import AboutUs from './pages/aboutUs';
import Home from './pages/home';
import Menu from './pages/menu';
import Navbar from './components/navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;