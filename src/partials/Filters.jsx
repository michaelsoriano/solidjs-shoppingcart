import { createSignal, createEffect, onMount } from "solid-js";
import { setProducts } from "../App";
import { productList } from "../data/productList";
export default function Filters(){
    
    const ALLPRODUCTS = productList.slice(); //making copy so doesnt mutate
    const [filters,setFilters] = createSignal([]); 
    
    onMount(()=>{
        let filterList = [];
        ALLPRODUCTS.forEach((product)=>{
            product.category.forEach((cat)=>{
                let found = filterList.some(function(el) {
                    return el.name === cat;
                });
                if(!found){
                    filterList.push({name:cat,checked:false});
                }                
            })
        })     
        setFilters(filterList); 
    })

    createEffect(() => {
        // making a flat array so we don't have to loop for every product
        // and use .includes instead.
        let filterArr = []; 
        filters().forEach((item)=>{
            if(item.checked){
                filterArr.push(item.name);
            }
        }) 

        if(filterArr.length === 0){       
            setProducts(ALLPRODUCTS);
        }else{
            let filteredProducts = ALLPRODUCTS.filter((item)=>{
                let found = item.category.some((cat)=>{
                    return filterArr.includes(cat);
                });
                if(found){
                    return item;
                }
            })
            setProducts(filteredProducts);
        }

    });
    function filterChangeHandler(evt){
        setFilters(
            filters().map((item)=>{
                return item.name === evt.target.value ? {...item,checked : evt.target.checked} : {...item}; 
            })
        );
        return false;
    }
    return (
        <For each={filters()}>
        {(filter)=>{               
            return (
                <div class="form-check">
                <input class="form-check-input" 
                    type="checkbox" 
                    value={filter.name} 
                    id={filter.name} 
                    checked={filter.checked} 
                    onChange={filterChangeHandler} />
                <label class="form-check-label" for={filter.name}>
                    {filter.name}
                </label>
                </div>
            )
        }}
        </For>
    )
}