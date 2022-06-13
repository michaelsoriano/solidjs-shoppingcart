import { Offcanvas } from "solid-bootstrap";
import { createSignal, onMount } from "solid-js";

let [showCart,setShowCart] = createSignal(false);


export default function Cart(){  
    onMount(() => {
        // setShowCart(true);
    });   
    return (
        <>
        <Offcanvas
            show={showCart()}
            onHide={()=>{setShowCart(false)}}
            placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the
                elements you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}