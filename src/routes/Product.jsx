import { useParams } from "solid-app-router"
import { Button, Card, Col, Container } from "solid-bootstrap";
import { createSignal, onMount } from "solid-js";
import { productList } from '../data/productList';

export default function Product(){

    const ALLPRODUCTS = productList.slice();
    const [ product, setProduct ] = createSignal({});
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

    return (
        <Container class="mb-5 mt-5 row inner-wrap">
            <h3 class="mb-5">{product().name}</h3>            
            <Col class="col-md-6">
                <Card>
                <Card.Img variant="top" src={product().image} />
                <Card.Body>
                    <Card.Title>{product().name}</Card.Title>
                    <Card.Text>
                        {product().description}
                    </Card.Text>                      
                </Card.Body>
                </Card>             
            </Col>
            <div class="col-md-6">        
                <Button variant="primary" onclick={()=>{navigate(`/${product().slug}/`)}}>Add to Cart</Button>
            </div>
        </Container>       
    )
}