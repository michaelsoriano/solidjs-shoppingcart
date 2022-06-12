import { lazy } from "solid-js";
import { Router,Route } from 'solid-app-router';
const Cart = lazy(() => import("./routes/Cart"));
const Home = lazy(() => import("./routes/Home"));

function App() {
  return (
    <>
    <header>header here...</header>
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Router>
    <footer>footer here..</footer>
    </>
  );
}

export default App;
