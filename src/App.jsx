import { lazy } from "solid-js";
import { Routes,Route } from 'solid-app-router';
import Header from "./partials/Header";
import { Container } from "solid-bootstrap";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./routes/Home"));
const Products = lazy(() => import("./routes/Products"));

function App() {
  return (
    <>
    <Header />
    <Cart />
    <Container>
    <Routes>
      <Route path='/' element={<Home />}   />
      <Route path='/products' element={<Products />}   />
    </Routes>
    </Container>
    <footer>footer here..</footer>
    </>
  );
}

export default App;
