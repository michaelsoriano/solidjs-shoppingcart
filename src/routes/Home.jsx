import { useNavigate } from "solid-app-router";
import { Col,Row,Button } from "solid-bootstrap";

export default function Home(){
    const navigate = useNavigate();
    return(    
        // <Row>
            <Col>
            <Button onclick={()=>{navigate('/products')}} variant="primary">Products</Button>
            </Col>
        // </Row>
      
    ) 
}