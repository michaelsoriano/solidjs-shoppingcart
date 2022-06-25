import { useNavigate } from "solid-app-router";
import { Button, Card, Col } from "solid-bootstrap";
import styles from '../assets/Styles.module.css';

export default function ProductTile({product}){
    const navigate = useNavigate();
    return (
         <Col class="col-md-3">
            <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text class={styles.ltClamp3}>
                    {product.description}
                </Card.Text>
                <Button variant="primary" onclick={()=>{navigate(`/products/${product.slug}/`)}}>Details</Button>
            </Card.Body>
            </Card>             
         </Col>
    )
}