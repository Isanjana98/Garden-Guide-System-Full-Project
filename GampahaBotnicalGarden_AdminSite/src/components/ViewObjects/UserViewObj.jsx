import React, {useEffect, useState} from "react";

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
    Tooltip, Spinner,
} from "react-bootstrap";
import axios from "axios";
import {AuthConfig} from "../../auth/AuthConfig";
import {BASE_URL} from "../../config/Config";

function UserViewObj({obj, isEditable, handleClose, isSave, refresh , is_super_user}) {

    const [id, setId] = useState(obj?.id)
    const [userName, setUserName] = useState(obj?.username)
    const [email, setEmail] = useState(obj?.email)
    const [firstName, setFirstName] = useState(obj?.first_name)
    const [lastName, setLastName] = useState(obj?.last_name)
    const [isActive, setIsActive] = useState(obj?.is_active)


    const [isLoading, setIsLoading] = useState(false)

    const handleSave = () => {

        if (isSave) {
            const data = {
                id: id,
                username: userName,
                email: email,
                first_name: firstName,
                last_name: lastName,
                is_active:isActive
            }

            axios.put(`${BASE_URL}/garden/dashboard/update_user`, data , AuthConfig())
                .then((res) => {
                    handleClose()
                }).catch((e) => {
                console.log(e)
            });
        } else {
            const data = {
                username: userName,
                email: email,
                firstName: firstName,
                lastName: lastName,
            }

            axios.post(`${BASE_URL}/garden/dashboard/update_user`, data , AuthConfig())
                .then((res) => {
                    handleClose()
                }).catch((e) => {
                console.log(e)
            });
        }

        refresh(true)
    }

    if (!isLoading) {
        return (
            <>
                <Container fluid>

                    <Form>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control placeholder="User name" value={userName} disabled={isEditable}
                                                  onChange={(e) => setId(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        placeholder="Email"
                                        disabled={isEditable}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="First name" value={firstName} disabled={isEditable}
                                                  onChange={(e) => setFirstName(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        placeholder="Last name"
                                        disabled={isEditable}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formCheckbox">
                                    <Form.Label className="mr-2">Is Active</Form.Label>
                                    <input disabled={isEditable || is_super_user} type="checkbox" checked={isActive} onChange={(e) =>{setIsActive(e.target.checked)}}/>
                                </Form.Group>
                            </Col>
                            <Col></Col>
                        </Row>

                    </Form>

                    <Button variant="secondary" className="mr-5" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave} disabled={isEditable}>
                        {isSave && "Update Changes"}
                        {!isSave && "Save Changes"}
                    </Button>

                </Container>
            </>
        );
    } else {
        <Spinner animation="border"/>
    }
};

export default UserViewObj;
