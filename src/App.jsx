import { lazy, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Routes,Route } from 'solid-app-router';
import { Container } from "solid-bootstrap";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Product from "./routes/Product";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./routes/Home"));
const Products = lazy(() => import("./routes/Products"));

//NOT SURE IF THIS IS BEST PRACTICE....


const prods = [
  {
      id: 'prod_LbfpnuB1dc81pW',
      price_id: 'price_1KuSTXCcUDzmItrr25evqaRt',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      name: 'Small Bundle',
      price: 50,
      currency: 'USD',
      image: 'https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      slug : 'small-bundle', 
      category : ['bundles']      
  },
  {
      id: 'prod_Lbfp4i5c7c0bTM',
      price_id: 'price_1KuSUICcUDzmItrr76GsciZE',
      description : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia',
      name: 'Medium Bundle',
      price: 65,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      slug : 'medium-bundle', 
      category : ['bundles']      
  },   
  {
      id: 'prod_LbfqYsmLGXclpr',
      price_id: 'price_1KuSUkCcUDzmItrrT3Xar7Ef',
      description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
      name: 'Large Bundle',
      price: 75,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      slug : 'large-bundle', 
      category : ['bundles']     
  }   
];

export const [showCart,setShowCart] = createSignal(false);
export const [products,setProducts] = createStore(prods);

function App() {
  return (
    <div class="main-wrap">
    <Header />
    <Cart showCart={showCart} setShowCart={setShowCart} />
    <Container>
      
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
