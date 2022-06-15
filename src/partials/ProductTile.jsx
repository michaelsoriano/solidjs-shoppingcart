import { useNavigate } from "solid-app-router";
import { Button, Card, Col } from "solid-bootstrap";

export default function ProductTile({product}){
    const navigate = useNavigate();
    return (
         <Col sm>
            <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary" onclick={()=>{navigate(`/products/${product.slug}/`)}}>Details</Button>
            </Card.Body>
            </Card>             
         </Col>
    )
}