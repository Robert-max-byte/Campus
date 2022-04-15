import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Categories from './pages/categories/Categories';
import Register from './pages/register/Register';
import { Login } from './pages/login/Login';
import { General } from './General';
import Product from './pages/Product/Product';
import { Shops } from './pages/Shops/Shops';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './pages/cart/Cart';

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/Home' element={<Home/>} />
              <Route path='/Product' element={<Product/>} />
              <Route path='/shops' element={<Shops/>}/>
              <Route path='/shop' element={<Shop/>} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
         </BrowserRouter>
  );
}

export default App;
