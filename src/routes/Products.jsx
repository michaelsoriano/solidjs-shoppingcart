import { For } from "solid-js";
import { products } from "../App";
import Filters from "../partials/Filters";
import { useNavigate } from "solid-app-router";
import { Card, Col, Row } from "solid-bootstrap";

function ProductTile({product}){
    const navigate = useNavigate();
    return (
         <Col lg="3">
            <Card class="product-tile" onclick={()=>{navigate(`/${product.slug}/`)}}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text class="lt-clamp-3">
                    {product.description}
                </Card.Text>
            </Card.Body>
            </Card>             
         </Col>
    )
}

export default function Products(){
    return (
        <Row class="mb-5 mt-5">
        <h3 class="mb-5">Products</h3>
        <Col lg="3">
            <Filters />
        </Col>         
        <Col lg="9" class="d-flex flex-wrap gap-4">        
        <For each={products}>            
            {product => <ProductTile product={product} /> }
        </For>         
        </Col>       
        </Row>
    )
}