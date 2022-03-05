import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { ViewItem } from './pages/viewItem'
import { CreateItem } from './pages/createItem'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Checkout } from './pages/checkout';
import { Payment } from './pages/payment';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/profile" element={<Profile/>} exact></Route>
          <Route path="/item" element={<ViewItem/>} exact></Route>
          <Route path="/create" element={<CreateItem/>} exact></Route>
          <Route path ="/checkout" element={<Checkout/>} exact></Route>
          <Route path ="/payment" element={<Payment/>} exact></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
