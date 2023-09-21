import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './view/Home/Home';
import About from './view/About/About';
import Products from './view/Products/Products';
import DetalProduct from './view/DetalProduct/DetalProduct';
import Error404 from './view/Error404/Error404';
import Contact from './view/Contact/Contact';
import Gmdss from './view/Gmdss/Gmdss';
import Sbm from './view/Sbm/Sbm';
import Services from './view/Services/Services';
import Navbar from './view/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/gmdss'
          element={<Gmdss />}
        />
        <Route
          path='/services'
          element={<Services />}
        />
        <Route
          path='/sbm'
          element={<Sbm />}
        />
        <Route
          path='/detailproduct/:id'
          element={<DetalProduct />}
        />
        <Route
          path='*'
          element={<Error404 />}
        />
      </Routes>
    </div>
  );
}

export default App;
