import { lazy, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Routes,Route } from 'solid-app-router';
import { Container } from "solid-bootstrap";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Product from "./routes/Product";
import { productList } from "./data/productList";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./routes/Home"));
const Products = lazy(() => import("./routes/Products"));

export const [showCart,setShowCart] = createSignal(false);
export const [products,setProducts] = createStore(productList);

function App() {
  return (
    <div class="main-wrap">
    <Header />
    <Cart showCart={showCart} setShowCart={setShowCart} />
    <Container class="inner-wrap">      
      <Routes>
        <Route path='/' element={<Home />}   />
        <Route path='/products' element={<Products />}   />
        <Route path="/products/:slug" element={<Product />} />
      </Routes>
    </Container>
    <Footer />
    </div>
  );
}

export default App;
