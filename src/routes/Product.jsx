import { useParams } from "solid-app-router"
import { Button, Card, Col, Container, Form, FormLabel, Row } from "solid-bootstrap";
import { createEffect, createSignal, For, onMount } from "solid-js";
import { productList } from '../data/productList';
import { setCartItems, setShowCart } from "../App";

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

    function addToCart(evt){
        // console.log(evt.target.value);
        // console.log(selectedSize());
        // console.log(quantity());        
        let obj = {
            ...product, 
            size : selectedSize(),
            quantity : quantity()
        }
        setShowCart(true);
        setCartItems([obj]);
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
                    <Card.Title>{product().name}</Card.Title>
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