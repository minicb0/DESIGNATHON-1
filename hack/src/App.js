import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import ViewItem from './pages/ViewItem'
import CreateItem from './pages/CreateItem'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
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
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
