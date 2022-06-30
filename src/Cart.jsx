import { Offcanvas } from "solid-bootstrap";
import { createEffect, For } from "solid-js";
import { cartItems, showCart, setShowCart } from "./App";

export default function Cart({showCart, setShowCart}){  

    createEffect(()=>{
        console.log(cartItems);
    })


    return (
        <>
        <Offcanvas
            show={showCart()}
            onHide={()=>{setShowCart(false)}}
            placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <For each={cartItems}>
                    {(item)=>{
                        return <h1>{item.id}</h1>
                    }}
                </For>
            </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}