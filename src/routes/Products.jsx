import { For } from "solid-js";
import { products } from "../App";
import ProductTile from "../partials/ProductTile";

export default function Products(){
    return (
        <div  class="d-flex flex-wrap w-100">
        <For each={products}>            
            {product => <ProductTile product={product} />}
        </For>
        </div>
    )
}