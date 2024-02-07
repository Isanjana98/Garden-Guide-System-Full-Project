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
    Tooltip, Modal,
} from "react-bootstrap";
import axios from "axios";
import CategoryViewObj from "../components/ViewObjects/CategoryViewObj";
import UserViewObj from "../components/ViewObjects/UserViewObj";
import ProtectiveRoute from "../auth/ProtectiveRoute";
import {AuthConfig} from "../auth/AuthConfig";
import {BASE_URL} from "../config/Config";

function UserView() {
    ProtectiveRoute()
    const thArray = ["USER ID","USER NAME","EMAIL" , "FIRST NAME" , "LAST NAME" , "ACTION"];
    const [tdArray , setTdArray] = useState([])
    const accessToken = localStorage.getItem("token");
    const uString = localStorage.getItem('loged_user_obj');
    const u = JSON.parse(uString);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [selectedCategory , setSelectedCategory] = useState(null)
    const [isEditable , setIsEditable] = useState(null)
    const [isSave , setIsSave] = useState(false)
    const handleTableButtons = (obj , isView , save) =>{
        setSelectedCategory(obj)
        setIsEditable(!isView)
        setIsSave(save)
        handleShow()
    }

    const handleModalOpenButton = () =>{
        setSelectedCategory(null)
        setIsEditable(false)
        setIsSave(false)
        handleShow()
    }

    const handleDelete = (id) => {

        axios.delete(`${BASE_URL}/garden/dashboard/delete_user`, {
                data: {id: id}, headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }}
            )
            .then((res) => {
                // Handle the response
                setRefresh(true)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const [refresh , setRefresh] = useState(true)
    const [plantList , setPlantList] = useState([])
    useEffect(() => {

        if(refresh) {
            axios.get(`${BASE_URL}/garden/dashboard/get_all_users` , AuthConfig())
                .then((res) => {
                    setPlantList(res.data);
                    const tempArray = res.data.map((row) => [
                        row.id,
                        row.username,
                        row.email,
                        row.first_name,
                        row.last_name,
                        <div>
                            <Button variant="warning" className="mr-2"
                                    onClick={() => handleTableButtons(row, false, false)}> <i
                                className="nc-icon nc-attach-87"/></Button>
                            <Button variant="info" className="mr-2" onClick={() => handleTableButtons(row, true, true)}><i
                                className="nc-icon nc-settings-tool-66"/></Button>
                            <Button variant="danger" disabled={!u.is_super_user} onClick={() => handleDelete(row.id)}><i
                                className="nc-icon nc-scissors"/></Button>
                        </div>
                    ]);
                    setTdArray(tempArray);
                })
                .catch((error) => {
                    // Handle any errors here
                    console.error("Error fetching data:", error);
                });

            setRefresh(false)
        }
    }, [refresh]);

    return (
        <>
            <Container fluid>

                {/*<div>*/}
                {/*    <Button variant="success" onClick={handleModalOpenButton}>*/}
                {/*        ADD NEW CATEGORY*/}
                {/*    </Button>*/}

                {/*</div>*/}

                <div>
                    <Table striped hover>
                        <thead>
                        <tr>
                            {
                                thArray.map((prop, key) => {
                                    return (
                                        <th  key={key}>{prop}</th>
                                    );
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tdArray.map((prop,key) => {
                                return (
                                    <tr key={key}>{
                                        prop.map((prop,key)=> {
                                            return (
                                                <td  key={key}>{prop}</td>
                                            );
                                        })
                                    }</tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>

                </div>
            </Container>


            <Modal size="xl" show={show}  aria-labelledby="contained-modal-title-vcenter" onHide={handleClose} centered>

                <Modal.Header closeButton>
                    <Modal.Title>USER VIEW</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <UserViewObj obj={selectedCategory} isEditable={isEditable} handleClose={handleClose} isSave = {isSave} refresh = {setRefresh} is_super_user={!u.is_super_user}></UserViewObj>
                </Modal.Body>

            </Modal>

        </>
    );
}

export default UserView;
