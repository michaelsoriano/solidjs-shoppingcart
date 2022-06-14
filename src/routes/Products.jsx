import { Link } from "solid-app-router";
import { For } from "solid-js";
import { products } from "../App";

export default function Products(){
    return (
        <For each={products}>
            {product => <h1><Link href={`/products/${product.slug}/`}>{product.name}</Link></h1>}
        </For>
    )
}