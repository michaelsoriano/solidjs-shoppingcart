import { Spinner } from "solid-bootstrap";
import { Show } from "solid-js";
import { loading } from "../App";

export default function Loading(){
    return (
        <Show when={loading()}>
        <div class="loading">
            <Spinner animation="border" role="status">
                <span class="visually-hidden">Loading...</span>
            </Spinner>
        </div> 
        </Show>
    )
}