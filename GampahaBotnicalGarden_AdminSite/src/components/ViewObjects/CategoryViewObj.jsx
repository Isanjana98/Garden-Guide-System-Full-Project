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

function CategoryViewObj({obj, isEditable, handleClose, isSave, refresh}) {

    const [id, setId] = useState(obj?.id)
    const [name, setName] = useState(obj?.name)


    const [isLoading, setIsLoading] = useState(false)

    const handleSave = () => {

        if (isSave) {
            const data = {
                id: id,
                name: name,
            }

            axios.put(`${BASE_URL}/garden/dashboard/update_category`, data , AuthConfig())
                .then((res) => {
                    handleClose()
                }).catch((e) => {
                console.log(e)
            });
        } else {
            const data = {
                name: name,
            }

            axios.post(`${BASE_URL}/garden/dashboard/add_category`, data , AuthConfig())
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
                                    <Form.Label>Category Id</Form.Label>
                                    <Form.Control disabled={true} placeholder="Category Id" value={id}
                                                  onChange={(e) => setId(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Category Name</Form.Label>
                                    <Form.Control
                                        placeholder="Category name"
                                        disabled={isEditable}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
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

export default CategoryViewObj;
