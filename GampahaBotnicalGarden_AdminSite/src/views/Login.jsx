import React , {useState , useEffect} from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip, Modal,
} from "react-bootstrap";
import PlantAdd from "../components/ViewObjects/PlantAdd";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../config/Config";

export default function Login() {

    const divStyle = {
        backgroundImage: 'url("https://th.bing.com/th/id/R.b541cd4f0ff37c38dfcf089956df628a?rik=jGibnBqTPZv92A&pid=ImgRaw&r=0")', // Replace with the path to your image
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
        width: '100vw', // Set the width to fill the container
        height: '100vh', // Set the height as needed
        // Add other CSS properties as needed
    };
    const navigate = useNavigate();
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email == null || email == "" ){
            alert("Please provide email")
            return;
        }else if( password == null || password == ""){
            alert("Please provide password")
            return;
        }

        const data = {
            username : email,
            password : password
        }
        axios.post(`${BASE_URL}/garden/login` , data).then((res)=>{
            const u = {
                username:res.data.username,
                token:res.data.access_token,
                is_super_user:res.data.is_super_user
            }
            // Convert the object to a JSON string
            const uString = JSON.stringify(u);
            localStorage.setItem("loged_user" , res.data.username)
            localStorage.setItem("loged_user_obj" , uString)
            localStorage.setItem("token" , res.data.access_token)
            navigate("/admin/dashboard");
        }).catch((e)=>{
            alert("Login Field")
        })
    }

    return (
        <>
            <div style={divStyle}>
                <div style={{display:"flex" , justifyContent:"space-around" , width:"100%" , height:"100%"}}>
                    <div style={{display:"flex",flexDirection : "column" , justifyContent:"space-around"}}>
                <Card style={{ width: '50vw' , height:"50vh" }}>
                    <Card.Body>
                        <Card.Title><h3>Botanical Garden Administrative Portal</h3>Staff Login</Card.Title>
                        <hr/>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                                </Form.Group>

                                <Form.Group className="mb-3" style={{float:"right"}} controlId="exampleForm.ControlInput1">
                                    <Button variant="danger" className="mr-3" type="reset">
                                        RESET
                                    </Button>
                                    <Button variant="success" type="submit">
                                        LOGIN
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Card.Body>
                    </Card.Body>
                </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

