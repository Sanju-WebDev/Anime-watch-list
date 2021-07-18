import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Spinner, Card, CardBody, CardTitle } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { addAnimeList, updateAnimeList } from '../../actions/animes.actions';
import ReactLoading from 'react-loading';
// import 'bootstrap/dist/css/bootstrap.css';
import FileBase from 'react-file-base64'

function UpdateForm({anime, toggle}) {

const dispatch = useDispatch()
const animeAdd = useSelector(state => state.animeAdd)
const [newEntry, setNewEntry] = useState({
    title: anime.title,
    mangaka: anime.mangaka, 
    studios: anime.studios, 
    genre: anime.genre, 
    plot: anime.plot, 
    year: anime.year, 
    rating: anime.rating, 
    seasons: anime.seasons, 
    episodes: anime.episodes,
    selectedFile: anime.image, 
})

const changeHandler = e => {
    const { name, value } = e.target
    setNewEntry({...newEntry, [name]: value})
}

// const validationSchema = Yup.object().shape({
//     title: Yup.string().required(), 
//     mangaka: Yup.string().required(), 
//     studios: Yup.string().required(), 
//     genre: Yup.string().required(), 
//     plot: Yup.string().required(), 
//     year: Yup.number().required(), 
//     rating: Yup.number().required(), 
//     seasons: Yup.number().required(), 
//     episodes: Yup.string().required(), 
// })

// const { register, handleSubmit, reset, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema)
// })

const submitHandler = (e) => {
    e.preventDefault()
    console.log(newEntry)
    dispatch(updateAnimeList(anime._id, newEntry))
    toggle()
}
// console.log("each",anime)
    return (
        <Row className= "mt-5">
        <Col>
        <Card body outline color="primary">
            <CardBody>
            <CardTitle tag="h1">New Anime Entry Form</CardTitle>
        <Form /*onSubmit= {(e) => submitHandler(e)}*/ >
            <Row form md= {12}>
                <Col md={12}>
                    <FormGroup  >
                        <Label for= "anime-title">Anime Name: </Label>
                        <Input type= "text" name= "title" id= "anime-title" placeholder= "Anime Name" value= {newEntry.title} onChange= {e => changeHandler(e)} required ></Input>                
                    </FormGroup>
                </Col>
            </Row>
            <Row form >
                <Col md={6}>
                    <FormGroup  >
                        <Label for= "anime-mangaka">Mangaka: </Label>
                        <Input type= "text" name= "mangaka" id= "anime-mangaka" placeholder= "Mangaka Name" value= {newEntry.mangaka} onChange= {e => changeHandler(e)} required ></Input>                
                    </FormGroup>
                </Col>
                <Col  md={6}>
                    <FormGroup  >
                        <Label for= "anime-studios">Studios: </Label>
                        <Input type= "text" name= "studios" id= "anime-studios" placeholder= "Studio Names" value= {newEntry.studios} onChange= {e => changeHandler(e)} required></Input>                
                    </FormGroup>
                </Col>
            </Row>
            <Row form >
                <Col md={{ size: 6}}>
                    <FormGroup  >
                        <Label for= "anime-genres">Genres: </Label>
                        <Input type= "text" name= "genre" id= "anime-genres" placeholder= "Genre Names" value= {newEntry.genre} onChange= {e => changeHandler(e)} required></Input>                
                    </FormGroup>
                </Col>
                <Col  md={6}>
                    <FormGroup  >
                        <Label for= "anime-year">Year Of Release: </Label>
                        <Input type= "number" name= "year" id= "anime-year" placeholder= "Release Year" value= {newEntry.year} onChange= {e => changeHandler(e)} required></Input>                
                    </FormGroup>
                </Col>
            </Row>   
            <Row form>
                <Col md={{ size: 4 }}>
                    <FormGroup>
                        <Label for= "anime-rating">Anime Rating: </Label>
                        <Input type= "number" name= "rating" id= "anime-rating" placeholder= "Anime Rating(IMDB)" value= {newEntry.rating} onChange= {e => changeHandler(e)} required></Input>
                    </FormGroup>
                </Col>
                <Col md={{ size: 8 }}>
                    <FormGroup>
                        <Label for= "anime-rating">Anime Banner: </Label>
                        {/* <Input type= "text" name= "rating" id= "anime-rating" placeholder= "Anime Rating(IMDB)" value= {newEntry.rating} onChange= {e => changeHandler(e)} required></Input> */}
                        <FileBase 
                            required
                            type= "file"
                            multiple= {false}
                            onDone= {({base64}) => setNewEntry({ ...newEntry, selectedFile: base64 })}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form md= {12}>
                <Col md={12}>
                    <FormGroup>
                        <Label for= "anime-plot">Anime Plot: </Label>
                        <Input type= "textarea" name= "plot" id= "anime-plot" placeholder= "Anime Plot" value= {newEntry.plot} onChange= {e => changeHandler(e)} required></Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row form >
                <Col md={3}>
                    <FormGroup>
                        <Label for= "anime-seasons">No of Seasons: </Label>
                        <Input type= "number" name= "seasons" id= "anime-seasons" placeholder= "Seasons" value= {newEntry.seasons} onChange= {e => changeHandler(e)} required></Input>
                    </FormGroup>
                </Col>            
                <Col md={9}>
                    <FormGroup>
                        <Label for= "anime-episodes">Number of Episodes in Each Season: </Label>
                        <Input type= "text" name= "episodes" id= "anime-episodes" placeholder= "Number of Episodes in Each Season" required value= {newEntry.episodes} onChange= {e => changeHandler(e)} ></Input>
                    </FormGroup>
                </Col>
            </Row>
            {/* <Row md= {12}>
                <FormGroup check>
                    <Col sm= {{size: 10, offset: 2}} className= "text-center">
                        <Button disabled= {animeAdd.loading ? true : false} color= "info" size= "md" block >
                            {animeAdd.loading ? <Spinner type="grow" color="light" /> : "+ Add"}
                        </Button>
                    </Col>
                </FormGroup>
            </Row> */}
            <Button disabled= {animeAdd.loading ? true : false} color= "primary" size= "lg" block onClick= {e => submitHandler(e)}>
                {animeAdd.loading ? <Spinner type="grow" color="light" /> : "+ Update"}
            </Button>
        </Form>
        </CardBody>
        </Card>
        </Col>
        </ Row>
    )
}

export default UpdateForm
