import { For } from "solid-js";
import { products } from "../App";
import Filters from "../partials/Filters";
import ProductTile from "../partials/ProductTile";

export default function Products(){
    return (
        <div class="products-page mb-5 mt-5 row">
        <h3 class="mb-5">Products</h3>
        <div class="col-md-3">
            <Filters />
        </div>         
        <div class="col-md-9 d-flex flex-wrap gap-4">        
        <For each={products}>            
            {product => <ProductTile product={product} /> }
        </For>         
        </div>       
        </div>
    )
}