import { Col, Offcanvas, Row } from "solid-bootstrap";
import { createEffect, createSignal, For } from "solid-js";
import { cartItems } from "./App";
import { Image } from "solid-bootstrap";

const [total, setTotal ] = createSignal(0);

function CartItems(){
    return  <>
        <For each={cartItems}>
            {(product)=>{
                return (
                    <Row class="mb-4">
                        <Col xs="3">
                            <Image src={product.image} class='thumbnail' /> 
                        </Col>
                        <Col xs="9" class="cart-item-text">
                            <h6>{product.name}</h6>
                            <p><span>{product.size}</span></p>
                            <p class="price-row">
                                <span>${product.price.toFixed(2)} (x{product.quantity})</span>
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

export default function Cart({showCart, setShowCart}){  
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