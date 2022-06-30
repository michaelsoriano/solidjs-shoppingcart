import { Toast, ToastContainer } from "solid-bootstrap";
import { toastMessage, setToastMessage } from "../App";


export default function Alert(){
    return (
        <ToastContainer position="top-center" class="mt-5" >
        <Toast
            autohide="true" 
            animation="true" 
            show={toastMessage()} 
            bg="success" 
            onClose={()=>setToastMessage(false)}>
            <Toast.Header>
                <span class="me-auto">{toastMessage()}</span>                 
            </Toast.Header>            
        </Toast>
        </ToastContainer>
    )
}