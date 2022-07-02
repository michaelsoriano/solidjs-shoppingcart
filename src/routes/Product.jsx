import { Link, useParams } from "solid-app-router"
import { Button, Card, Col, Container, Form, FormLabel, Row, Toast, ToastContainer } from "solid-bootstrap";
import { createEffect, createSignal, For, onMount } from "solid-js";
import { productList } from '../data/productList';
import { cartItems, setCartItems, setToastMessage } from "../App";

export default function Product(){

    const ALLPRODUCTS = productList.slice();
    const [ product, setProduct ] = createSignal({});
    const [ selectedSize, setSelectedSize ] = createSignal('');
    const [ quantity, setQuantity ] = createSignal(1);
    const [ btnDisabled, setBtnDisabled ] = createSignal(true);
    const params = useParams();

    onMount(()=>{
        let productArr = ALLPRODUCTS.filter((item)=>{
            return item.slug === params.slug;
        })
        if(productArr.length === 0){
            alert('HANDLE ERROR');
        }else{
            setProduct(productArr[0])
        }        
    })

    createEffect(()=>{
        if(selectedSize() !== '' && quantity() !== ''){
            setBtnDisabled(false);
        }else{
            setBtnDisabled(true);
        }
    })

    function addToCart(){
        let productToAdd ={
             ...product(), 
            size : selectedSize(),
            quantity : quantity()
        
        }; 
        let items = cartItems.slice();
        let foundIndex, found;

        found = items.filter((item,ind)=>{            
            if(item.id === productToAdd.id 
                && item.size === productToAdd.size){
                    foundIndex = ind;
                    return item
                }
        })

        let msg = '';

        if(found.length > 0){
            msg = 'Item updated in cart';
            found[0].size = selectedSize();
            found[0].quantity = parseInt(quantity());
            items.splice(foundIndex, 1, found[0]);
        }else{
            msg = 'Item added to cart';
            productToAdd.size = selectedSize();
            productToAdd.quantity = parseInt(quantity());
            items.push(productToAdd);
        }
        setCartItems(items);
        setToastMessage(msg);
    }
    function changeHandler(evt){         
        switch(evt.target.name){
            case 'size' :
                setSelectedSize(evt.target.value);
            break;
            case 'quantity':
                setQuantity(evt.target.value);
            break;
        }
    }    

    return (
        <Container class="mb-5 mt-5 row inner-wrap">        
            <h3 class="mb-5">{product().name}</h3>            
            <Col lg="6">
                <Card>
                <Card.Img variant="top" src={product().image} />
                </Card> 
            </Col>
            <Col lg="6"> 
                <Card>     
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <hr />
                    <Card.Text>
                        {product().description}
                    </Card.Text>     
                    <Row>
                        <Col lg="6">
                        <FormLabel>Size</FormLabel>
                        <Form.Select 
                            size="sm" 
                            class="mb-4" 
                            name="size" 
                            value={selectedSize()} 
                            onChange={changeHandler}>
                        <option value=''>--</option>
                        <For each={product().sizes}>
                            {size=><option value={size}>{size}</option>}
                        </For>
                        </Form.Select>
                        </Col>
                        <Col lg="6">
                        <FormLabel>Quantity</FormLabel>
                        <Form.Select 
                            size="sm" 
                            class="mb-4" 
                            name="quantity" 
                            value={quantity()}
                            onChange={changeHandler}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </Form.Select>    
                        </Col>
                        
                    </Row>
                    <Button
                        class="mb-3"
                        disabled={btnDisabled()} 
                        variant="primary" 
                        value={product().id} 
                        onclick={addToCart}>Add to Cart</Button> 
                                       
                </Card.Body>
                </Card>
            </Col>
        </Container>       
    )
}