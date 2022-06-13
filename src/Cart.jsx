import { Offcanvas } from "solid-bootstrap";

export default function Cart({showCart, setShowCart}){  
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
                Some text as placeholder. In real life you can have the
                elements you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}