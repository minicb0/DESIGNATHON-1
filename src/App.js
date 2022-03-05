import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { ViewItem } from './pages/viewItem'
import { CreateItem } from './pages/createItem'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home/>} exact></Route>
          <Route path="/profile" element={<Profile/>} exact></Route>
          <Route path="/item" element={<ViewItem/>} exact></Route>
          <Route path="/create" element={<CreateItem/>} exact></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
