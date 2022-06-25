import { useNavigate } from "solid-app-router";
import { Button, Card, Col } from "solid-bootstrap";

export default function ProductTile({product}){
    const navigate = useNavigate();
    return (
         <Col class="col-md-3">
            <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text class="lt-clamp-3">
                    {product.description}
                </Card.Text>
                <Button variant="primary" onclick={()=>{navigate(`/${product.slug}/`)}}>Details</Button>
            </Card.Body>
            </Card>             
         </Col>
    )
}