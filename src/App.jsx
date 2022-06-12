import { lazy } from "solid-js";
import { Routes,Route } from 'solid-app-router';

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./routes/Home"));
const Products = lazy(() => import("./routes/Products"));

function App() {
  return (
    <>
    <header>header here...</header>
    <Cart />
    <Routes>
      <Route path='/' element={Home}   />
      <Route path='/products' element={Products}   />
    </Routes>
    <footer>footer here..</footer>
    </>
  );
}

export default App;
