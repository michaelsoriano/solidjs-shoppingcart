import { lazy, createSignal } from "solid-js";
import { Routes,Route } from 'solid-app-router';
import { Container } from "solid-bootstrap";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./routes/Home"));
const Products = lazy(() => import("./routes/Products"));

//NOT SURE IF THIS IS BEST PRACTICE....
export let [showCart,setShowCart] = createSignal(false);

function App() {
  return (
    <div class="main-wrap">
    <Header />
    <Cart showCart={showCart} setShowCart={setShowCart} />
    <Container>
    <Routes>
      <Route path='/' element={<Home />}   />
      <Route path='/products' element={<Products />}   />
    </Routes>
    </Container>
    <Footer />
    </div>
  );
}

export default App;
