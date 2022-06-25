import { lazy, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Routes,Route } from 'solid-app-router';
import { Container } from "solid-bootstrap";
import { productList } from "./data/productList";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Cart = lazy(() => import("./Cart"));
const Product = lazy(() => import("./routes/Product"));
 
const Products = lazy(() => import("./routes/Products"));

export const [showCart,setShowCart] = createSignal(false);
export const [products,setProducts] = createStore(productList);

function App() {
  return (
    <div class="main-wrap">
    <Header />
    <Cart showCart={showCart} setShowCart={setShowCart} />
    <Container class="pb-5">      
      <Routes>
        <Route path='/' element={<Products />}   />
        <Route path="/:slug" element={<Product />} />
      </Routes>
    </Container>
    <Footer />
    </div>
  );
}

export default App;
