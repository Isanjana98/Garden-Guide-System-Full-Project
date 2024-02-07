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

function AreaViewObj({obj, isEditable, handleClose, isSave, refresh}) {

    const [id, setId] = useState(obj?.id)
    const [name, setName] = useState(obj?.name)
    const [description, setDescription] = useState(obj?.description)


    const [isLoading, setIsLoading] = useState(false)

    const handleSave = () => {

        if (isSave) {
            const data = {
                id: id,
                name: name,
                description: description
            }

            axios.put(`${BASE_URL}/garden/dashboard/update_area`, data , AuthConfig())
                .then((res) => {
                    handleClose()
                }).catch((e) => {
                console.log(e)
            });
        } else {
            const data = {
                id: id,
                name: name,
                description: description,
            }

            axios.post(`${BASE_URL}/garden/dashboard/update_area`, data , AuthConfig())
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
                                    <Form.Label>Area Id</Form.Label>
                                    <Form.Control disabled={true} placeholder="Area Id" value={id}
                                                  onChange={(e) => setId(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Area Name</Form.Label>
                                    <Form.Control
                                        placeholder="Area name"
                                        disabled={isEditable}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control disabled={isEditable} as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </Form.Group>
                            </Col>

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

export default AreaViewObj;
