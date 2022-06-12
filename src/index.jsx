/* @refresh reload */
import { lazy } from "solid-js";
import { render } from 'solid-js/web';
import { Router, Routes, Route } from 'solid-app-router';
import App from './App';
// const Cart = lazy(() => import("./routes/Cart"));

render(() => 
    ( <Router>
        {/* <Routes>
            <Route path='/cart' element={Cart} />
        </Routes> */}
        <App />
       </Router> ), document.getElementById('root'));
