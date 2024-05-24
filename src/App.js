import './App.css';
import Notfound from './components/404/Notfound';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct/SingleProduct';


function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path='/review' element={<Review />}/>
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/' element={<Shop />} />
          <Route path='/product/:productId' element={<SingleProduct />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
