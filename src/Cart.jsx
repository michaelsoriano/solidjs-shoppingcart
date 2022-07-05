import { Col, Offcanvas, Row } from "solid-bootstrap";
import { createEffect, createSignal, For } from "solid-js";
import { cartItems, setCartItems, showCart, setShowCart } from "./App";
import { Image } from "solid-bootstrap";

const [total, setTotal ] = createSignal(0);

function CartItems(){
    function removeItem(evt){
        evt.preventDefault();
        const index = parseInt(evt.target.value);    
        let items = [...cartItems]; 
        items.splice(index,1)
        setCartItems(items);
    }
    function updateQuantity(evt,method){
        evt.preventDefault();
        const index = parseInt(evt.target.value);         
        let temp = cartItems.map((item,i)=>{
            if(index === i){
                if(item.quantity === 1 && !method){
                    return {...item};
                }
                const qty = method === 'add' ? item.quantity + 1 : item.quantity - 1;
                const subtotal = item.price * qty;
                return {
                    ...item,
                    quantity : qty, 
                    subtotal : subtotal
                }
            }else{
                return {...item};
            }            
        })
        setCartItems(temp);     
    }
    return  <>
        <For each={cartItems}>
            {(product,ind)=>{
                return (
                    <Row class="mb-4 cart-item">
                        <Col xs="3">
                            <Image src={product.image} class='thumbnail' /> 
                        </Col>
                        <Col xs="9" class="cart-item-text">
                            <h6>{product.name} <button  value={ind()} onClick={evt=>removeItem(evt)}>x</button></h6>
                            <p><span>{product.size}</span></p>
                            <p class="price-row">
                                <span>${product.price.toFixed(2)}</span>
                                <span>
                                 <button value={ind()} onClick={evt=>updateQuantity(evt,'add')}>+</button>
                                 {product.quantity}
                                 <button value={ind()} onClick={evt=>updateQuantity(evt,null)}>-</button>
                                </span>
                                <span>${product.subtotal.toFixed(2)}</span>
                            </p>
                        </Col>    
                    </Row> 
                )
            }}
        </For>
        <hr />
        <Row class="mb-4 total-row">                    
            <h4>${total().toFixed(2)}</h4>                        
        </Row>    
        </>     
}

export default function Cart(){  
    createEffect(()=>{
        let ttl = 0;
        cartItems.forEach((item)=>{
            ttl = ttl+item.subtotal;
        })      
        setTotal(ttl);
    })

    return (
        <>
        <Offcanvas
            class="px-3"
            show={showCart()}
            onHide={()=>{setShowCart(false)}}
            placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <CartItems />                        
            </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}