import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input, Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import AnimeForm from '../AnimeForm/Form'
import UpdateForm from '../AnimeForm/UpdateForm'
import { deleteAnime } from '../../actions/animes.actions'

function ListItem({each}) {

const dispatch = useDispatch()
const animeListFetched = useSelector(state => state.animeList)
const { loading, animeList, error } = animeListFetched
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);
    return (
        <>        
            <Col md= {4} className= "mb-5">
                <Card body inverse style={{ backgroundColor: '#CDD4F5', borderColor: '#CDD4F5' }}>
                    <CardBody>
                    <CardTitle tag="h1">{each.title}</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><span>{each.mangaka}</span><span className= "pull-right">{each.year}</span></CardSubtitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><span>{each.studios}</span></CardSubtitle>
                    <br />
                    <CardSubtitle tag="h4" className="mb-2 ">{each.rating}</CardSubtitle>
                    <br />
                    <CardSubtitle tag="h4" className="">{each.genre}</CardSubtitle>                    
                    </CardBody>
                    {each.image && <img width="100%" src={each.image} alt="Card image cap" />}
                    <CardBody>
                    <CardText>{each.plot}</CardText>
                    <CardSubtitle tag="h4" className="mb-4 ">{
                        each.episodes.map((ep, i) => 
                            i==0 ? <span key= {i}>{i+1} - {ep}</span> : <span key= {i}>, {i+1} - {ep}</span>
                        )                    
                    }</CardSubtitle>                    
                    {/* <CardLink href="#">Card Link</CardLink> */}
                    {/* <CardLink href="#">Another Link</CardLink> */}
                    <Row>
                        <Col>
                            <Button outline color= "success" block onClick={toggle}>Edit</Button>
                        </Col>
                        <Col>
                            <Button color= "danger" block onClick= {() => {dispatch(deleteAnime(each._id))}}>Delete</Button>
                        </Col>
                    </Row>
                    </CardBody>                    
                </Card>                
            </Col>        
            <Modal isOpen={modal} toggle={toggle} fade={false} size= "lg">                    
                <ModalHeader tag= "h1" toggle={toggle}>Update Anime Entry Form</ModalHeader>
                <ModalBody>
                    <UpdateForm anime= {each} toggle={() => toggle()} />             
                </ModalBody>
                <ModalFooter>
                {/* <Button color="primary" onClick={toggle} size= "lg">Update</Button>{' '} */}
                <Button color="secondary" onClick={toggle} size= "lg">Cancel</Button>
                </ModalFooter>
            </Modal>
        </>               
    )
}

export default ListItem
