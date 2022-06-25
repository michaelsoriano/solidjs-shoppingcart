import { For } from "solid-js";
import { products } from "../App";
import ProductTile from "../partials/ProductTile";

export default function Products(){
    return (
        <div class="products-page mb-5">
        <h1 class="mt-5">Products</h1>
        <div class="d-flex flex-wrap w-100 gap-5 mt-5">        
        <For each={products}>            
            {product => <ProductTile product={product} /> }
        </For>
        </div>
        </div>
    )
}