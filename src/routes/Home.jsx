import { useNavigate } from "solid-app-router";
import { Col,Row,Button } from "solid-bootstrap";

export default function Home(){
    const navigate = useNavigate();
    return(    
            <Col>
            <Button onclick={()=>{navigate('/products')}} variant="primary">Products</Button>
            </Col>
    ) 
}