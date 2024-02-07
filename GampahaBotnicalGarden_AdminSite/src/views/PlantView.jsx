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
import ProtectiveRoute from "../auth/ProtectiveRoute";
import {AuthConfig} from "../auth/AuthConfig";
import {BASE_URL} from "../config/Config";

function PlantView() {
    ProtectiveRoute()
    const thArray = ["ID","NAME","SCIENTIFIC NAME","SINHALA NAME","TAMIL NAME" , "KINGDOM" , "COUNTRY" ,"STATUS" ,"ACTION"];
    const [tdArray , setTdArray] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const uString = localStorage.getItem('loged_user_obj');
    const u = JSON.parse(uString);

    const [selectedPlant , setSelectedPlant] = useState(null)
    const [isEditable , setIsEditable] = useState(null)
    const [isSave , setIsSave] = useState(false)
    const handleTableButtons = (obj , isView , save) =>{
        setSelectedPlant(obj)
        setIsEditable(!isView)
        setIsSave(save)
        handleShow()
    }

    const handleModalOpenButton = () =>{
        setSelectedPlant(null)
        setIsEditable(false)
        setIsSave(false)
        handleShow()
    }

    const handleDelete = (id) => {

        axios.delete(`${BASE_URL}/garden/dashboard/delete_plant`, {data: {id: id}})
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
            axios.get(`${BASE_URL}/garden/dashboard/get_plant_all` , AuthConfig())
                .then((res) => {
                    setPlantList(res.data);
                    const tempArray = res.data.map((row) => [
                        row.id,
                        row.name,
                        row.scientific_name,
                        row.other_name,
                        row.name_in_other_language,
                        row.kingdom,
                        row.country,
                        row.status,
                        <div>
                            <Button variant="warning" className="mr-2"
                                    onClick={() => handleTableButtons(row, false, false)}> <i
                                className="nc-icon nc-attach-87"/></Button>
                            <Button variant="info" className="mr-2" onClick={() => handleTableButtons(row, true, true)}><i
                                className="nc-icon nc-settings-tool-66"/></Button>
                            <Button variant="danger" onClick={() => handleDelete(row.id)}><i
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

                <div>
                    <Button variant="success" onClick={handleModalOpenButton}>
                        ADD NEW PLANT
                    </Button>

                </div>

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
                    <Modal.Title>Plant Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <PlantAdd obj={selectedPlant} isEditable={isEditable} handleClose={handleClose} isSave = {isSave} refresh = {setRefresh} is_supper_user={!u.is_super_user}></PlantAdd>
                </Modal.Body>

            </Modal>

        </>
    );
}

export default PlantView;
