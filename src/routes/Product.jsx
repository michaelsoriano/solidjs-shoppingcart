import { useParams } from "solid-app-router"
import { Container } from "solid-bootstrap";

export default function Product(){

    const params = useParams();
    console.log(params.slug);

    return (
        <Container class="inner-wrap">
            <h1>single product {params.slug}</h1>
        </Container>       
    )
}