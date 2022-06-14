import { useParams } from "solid-app-router"

export default function Product(){

    const params = useParams();
    console.log(params.slug);

    return (
       <h1>single product {params.slug}</h1>
    )
}