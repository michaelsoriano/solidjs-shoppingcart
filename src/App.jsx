import { lazy, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Routes,Route } from 'solid-app-router';
import { Container, Spinner } from "solid-bootstrap";
import { productList } from "./data/productList";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Loading from "./partials/Loading";

const Cart = lazy(() => import("./Cart"));
const Product = lazy(() => import("./routes/Product")); 
const Products = lazy(() => import("./routes/Products"));

export const [loading,setLoading] = createSignal(false);
export const [showCart,setShowCart] = createSignal(false);
export const [products,setProducts] = createStore(productList);

function App() {
  return (
    <>
    <Loading />
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
    </>
  );
}

export default App;
