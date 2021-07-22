import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input, Spinner, Toast, ToastHeader, ToastBody } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import AnimeForm from '../AnimeForm/Form'
import UpdateForm from '../AnimeForm/UpdateForm'
import { deleteAnime, downVoteAnime, upVoteAnime } from '../../actions/animes.actions'

function ListItem({each}) {

const dispatch = useDispatch()
const animeListFetched = useSelector(state => state.animeList)
const auth = useSelector(state => state.auth)
const { loading, animeList, error } = animeListFetched
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const deleteHandler = () => {
    if(window.confirm("delete post")) {
        dispatch(deleteAnime(each._id))
    }
    return (
        <Toast>
            <ToastHeader icon="primary">
            Reactstrap
            </ToastHeader>
            <ToastBody>
            This is a toast with a primary icon — check it out!
            </ToastBody>
        </Toast>
    )
}
    return (
        <>        
            <Col md= {{size: 3, offset: 0}} sm= "12">
                <Card md= "3" body style={{ backgroundColor: '#fff', borderColor: '#fff' }} className= "shadow p-3 mb-5 bg-white rounded">
                    <CardBody>
                    <CardTitle tag="h1" className="d-flex justify-content-between">
                        <span>{each.title}</span>
                        { each.createdBy === auth.user?._id && <span className= "pull-right" onClick={toggle}><i className="far fa-edit fa-sm" style= {{color: '#d3d3d3', cursor: 'pointer'}}></i></span>}
                    </CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><span>{each.mangaka}</span><span className= "pull-right">{each.year}</span></CardSubtitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">
                        {
                            each.studios && each.studios.map((one, i) => 
                                i==0 ? `${one.trim()} ` : `, ${one.trim()}`
                            )
                        }
                    </CardSubtitle>
                    <br />
                    {/* <CardSubtitle tag="h4" className="mb-2 ">{each.rating}</CardSubtitle> */}
                    <br />
                    <CardSubtitle tag="h4" className="">
                        {
                            each.genre && each.genre.map(one => 
                                `#${one.trim()} `
                            )
                        }
                    </CardSubtitle>                    
                    </CardBody>
                    {each.image && <img width="100%" src={each.image} alt="Card image cap" />}
                    <CardBody>
                    <CardText>{each.plot}</CardText>
                    {/* <CardSubtitle tag="h4" className="mb-4 ">{
                        each.episodes.map((ep, i) => 
                            i==0 ? <span key= {i}>{i+1} - {ep}</span> : <span key= {i}>, {i+1} - {ep}</span>
                        )                    
                    }</CardSubtitle>*/}
                    {/* <CardLink href="#">Card Link</CardLink> */}
                    {/* <CardLink href="#">Another Link</CardLink> */}
                    <Row>
                        <Col>
                            {/* <Button color= "success"  >up</Button> */}
                            <i className={`fas fa-chevron-circle-up ${each.upvotes?.includes(auth.user?._id) ? 'fa-4x' : 'fa-3x'}`} style= {{color: each.upvotes?.includes(auth.user?._id) ? 'green' : '#d3d3d3' , cursor: 'pointer'}} onClick= {() => dispatch(upVoteAnime(each._id))}></i>
                            <span>{each.upvotes?.length}</span>
                            {/* <Button color= "danger"  >do</Button> */}
                            <i className={`fas fa-chevron-circle-down ${each.downvotes?.includes(auth.user?._id) ? 'fa-4x' : 'fa-3x'}`} style= {{color: each.downvotes?.includes(auth.user?._id) ? 'red' : '#d3d3d3', cursor: 'pointer'}} onClick= {() => dispatch(downVoteAnime(each._id))}></i>
                            <span>{each.downvotes?.length}</span>
                        </Col>
                        <Col >
                            {/* <Button className="pull-right" color= "danger" onClick= {() => {dispatch(deleteAnime(each._id))}}>Delete</Button> */}
                            { each.createdBy === auth.user?._id && <i className="far fa-trash-alt fa-4x pull-right" style= {{color: 'grey', cursor: 'pointer'}} onClick= {() => deleteHandler()}></i>}
                            {/* <Button className="pull-right" outline color= "success" onClick={toggle}>Edit</Button>*/}
                        </Col>
                    </Row>
                    </CardBody>                    
                </Card>
            </Col>
            <Modal isOpen={modal} toggle={toggle} fade={false} size= "md">                    
                <ModalHeader tag= "h1" toggle={toggle} className= "d-flex justify-content-between">Update Anime Entry Form</ModalHeader>
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