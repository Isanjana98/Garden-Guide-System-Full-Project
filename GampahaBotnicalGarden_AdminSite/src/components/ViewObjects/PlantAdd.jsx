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

function PlantAdd({obj , isEditable , handleClose , isSave , refresh , is_supper_user}) {

    const[id , setId] = useState(obj?.id)
    const[name , setName] = useState(obj?.name)
    const[scientificName , setScientificName] = useState(obj?.scientific_name)
    const[otherName , setOtherName] = useState(obj?.other_name)
    const[nameInOtherLanguage , setNameInOtherLanguage] = useState(obj?.name_in_other_language)
    const[kingdom , setKingdom] = useState(obj?.kingdom)
    const[country , setCountry] = useState(obj?.country)
    const[clade , setClade] = useState(obj?.clade)
    const[description , setDescription] = useState(obj?.description)
    const[speciality , setSpeciality] = useState(obj?.speciality)
    const[history , setHistory] = useState(obj?.history)
    const[category , setCategory] = useState(obj?.category)
    const[status , setStatus] = useState(obj?.status)
    const [selectedImage, setSelectedImage] = useState(obj?.image_org);

    const [created_by_username, setCreated_by_username] = useState(obj?.created_by_username);
    const [updated_by_username, setUpdated_by_username] = useState(obj?.updated_by_username);
    const [created_time, setCreated_time] = useState(obj?.created_time);
    const [updated_time, setUpdated_time] = useState(obj?.updated_time);

    const [loadFirstTime , setLoadFirstTime] = useState(true)

    const handleImageChange = (e) => {
        setLoadFirstTime(false)
        const file = e.target.files[0];
        if (file) {
            // Read the selected file and create a data URL
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    const[isLoading , setIsLoading] = useState(true)
    const[categoryList , setCategoryList] = useState(null)
    useEffect(()=>{
        if(isLoading){
            axios.get(`${BASE_URL}/garden/dashboard/categories` , AuthConfig())
                .then((res)=>{
                    setCategoryList(res.data)
                    setIsLoading(false)
                }).catch((e) =>{
                    console.log(e)
            })
        }
    } , [category])

    const handleSave = () => {

        if(isSave) {
            const data = new FormData();
            data.append('id', id);
            data.append('name', name);
            data.append('scientific_name', scientificName);
            data.append('other_name', otherName);
            data.append('name_in_other_language', nameInOtherLanguage);
            data.append('kingdom', kingdom);
            data.append('country', country);
            data.append('clade', clade);
            data.append('description', description);
            data.append('speciality', speciality);
            data.append('history', history);
            data.append('category', category);
            data.append('status', status);


            const imageInput = document.getElementById('fileInput');
            if (imageInput.files.length > 0) {
                data.append('image', imageInput.files[0]);
            }

            axios.put(`${BASE_URL}/garden/dashboard/update_plant`, data , AuthConfig())
                .then((res) => {
                    handleClose()
                }).catch((e) => {
                console.log(e)
            });
        }else{
            const data = new FormData();
            data.append('name', name);
            data.append('scientific_name', scientificName);
            data.append('other_name', otherName);
            data.append('name_in_other_language', nameInOtherLanguage);
            data.append('kingdom', kingdom);
            data.append('country', country);
            data.append('clade', clade);
            data.append('description', description);
            data.append('speciality', speciality);
            data.append('history', history);
            data.append('category', category);
            data.append('status', status);


            const imageInput = document.getElementById('fileInput');
            if (imageInput.files.length > 0) {
                data.append('image', imageInput.files[0]);
            }

            axios.post(`${BASE_URL}/garden/dashboard/add_plant`, data , AuthConfig())
                .then((res) => {
                    handleClose()
                }).catch((e) => {
                console.log(e)
            });
        }

        refresh(true)
    }

    if(!isLoading) {
        return (
            <>
                <Container fluid>

                    <Form>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Plant Name</Form.Label>
                                    <Form.Control disabled={isEditable} placeholder="Plant Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Scientific name</Form.Label>
                                    <Form.Control
                                        placeholder="Scientific name"
                                        disabled={isEditable}
                                        value={scientificName}
                                        onChange={(e) => setScientificName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sinhala Name</Form.Label>
                                    <Form.Control disabled={isEditable} placeholder="Sinhala Name" value={otherName} onChange={(e) => setOtherName(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tamil name</Form.Label>
                                    <Form.Control disabled={isEditable} placeholder="Tamil name" value={nameInOtherLanguage} onChange={(e) => setNameInOtherLanguage(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Family</Form.Label>
                                    <Form.Control disabled={isEditable} placeholder="Family" value={kingdom} onChange={(e) => setKingdom(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control disabled={isEditable} placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Clade</Form.Label>
                                    <Form.Control disabled={isEditable} placeholder="Clade" value={clade} onChange={(e) => setClade(e.target.value)}/>
                                </Form.Group>
                            </Col>

                            <Col>

                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select disabled={isEditable} value={category} onChange={(e) => setCategory(e.target.value)}>
                                        {categoryList.map((val)=>{
                                            return(
                                                <option value={val.id}>{val.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Status : </Form.Label>
                                <Form.Select aria-label="Default select example" value={status} disabled={isEditable || is_supper_user} onChange={(e)=>setStatus(e.target.value)}>
                                    <option value="PENDING">PENDING</option>
                                    <option value="ACTIVE">ACTIVE</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Group controlId="formFile">
                                    <Form.Label>Plant image </Form.Label>
                                    <Form.Control id="fileInput" type="file" disabled={isEditable} onChange={handleImageChange}/>
                                </Form.Group>
                            </Col>
                        </Row>

                            {selectedImage && (
                                <div className="image-preview" style={{width:"18rem"}}>
                                    {loadFirstTime && (
                                    <img src={`${BASE_URL}` + selectedImage} className="img-thumbnail" alt="..." alt="Preview" />
                                    )}
                                    {!loadFirstTime && (
                                        <img src={selectedImage} className="img-thumbnail" alt="..." alt="Preview" />
                                    )}
                                    <button disabled={isEditable} className="btn btn-sm btn-warning" onClick={(e)=>setSelectedImage(null)}>remove</button>
                                </div>
                            )}

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control disabled={isEditable} as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>History</Form.Label>
                                    <Form.Control disabled={isEditable} as="textarea" rows={3} value={history} onChange={(e) => setHistory(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Speciality</Form.Label>
                                    <Form.Control disabled={isEditable} as="textarea" rows={3} value={speciality} onChange={(e) => setSpeciality(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>


                    </Form>
                    {isSave && (
                    <>

                        <hr/>
                        META DATA
                        <div>
                            <table>
                                <tr>
                                    <td>Created by : </td>
                                    <td>{created_by_username}</td>
                                </tr>
                                <tr>
                                    <td>Updated by : </td>
                                    <td>{updated_by_username}</td>
                                </tr>
                                <tr>
                                    <td>Created time : </td>
                                    <td>{created_time}</td>
                                </tr>
                                <tr>
                                    <td>Updated time : </td>
                                    <td>{updated_time}</td>
                                </tr>
                            </table>
                        </div>
                        <hr/>

                    </>
                    )}

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
    }else {
        <Spinner animation="border" />
    }
};

export default PlantAdd;
