import { createSignal, onMount } from "solid-js";
import { setProducts } from "../App";
import { productList } from "../data/productList";
export default function Filters(){
    
    const [filters,setFilters] = createSignal([]);
    
    onMount(()=>{
        let filterList = [];
        productList.forEach((product)=>{
            product.category.forEach((cat)=>{
                if(filterList.indexOf(cat) === -1){
                    filterList.push(cat);
                }
            })
        })    
        setFilters(filterList); 
    })
    function filterChanged(evt){
        let filteredProducts = []; 

      

        // setProducts(filteredProducts); THIS SETS THE PRODUCTS TO FILTERED.. NEED A WAY TO STORE ALL PRODS...
        console.log(filteredProducts); 

        if(evt.target.checked){
            console.log(evt.target.value, ' is checked')    
            productList.forEach((product)=>{
                if(product.category.indexOf(evt.target.value) !== -1){
                    filteredProducts.push(product);
                }
            })        
        }else{
            console.log(evt.target.value, ' is NOT checked')
            productList.forEach((product)=>{
                if(product.category.indexOf(evt.target.value) !== -1){
                    filteredProducts.push(product);
                }
            })
        }

        // setProducts(filteredProducts);

    }
    return (
        <For each={filters()}>
        {(filter)=>{                     
            return (
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value={filter} id={filter} onChange={filterChanged} />
                <label class="form-check-label" for={filter}>
                    {filter}
                </label>
                </div>
            )
        }}
        </For>
    )
}