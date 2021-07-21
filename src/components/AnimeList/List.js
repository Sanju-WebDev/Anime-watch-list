import React, { useEffect } from 'react'
import { CardDeck, CardGroup, Container, Spinner } from 'reactstrap'
import ListItem from './ListItem'
import { useSelector,useDispatch  } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay';
import { fetchAnimeList } from '../../actions/animes.actions';

function AnimeLists() {

const dispatch = useDispatch()
const animeListFetched = useSelector(state => state.animeList)
const { loading, animeList, error } = animeListFetched
useEffect(() => {
    // dispatch(fetchAnimeList())
}, [])

// const animeList = useSelector(state => state.animeList)
console.log(animeList)
    return (
        <Container fluid>
            {
            loading ? 
            // <div >
            <LoadingOverlay
                active={true}
                spinner= {
                    <>
                        <Spinner type="grow" color="light" size= "lg" />
                        <Spinner type="grow" color="light" size= "lg" />
                        <Spinner type="grow" color="light" size= "lg" />
                    </>
                }
                styles={{
                    // wrapper: {},
                    // overlay: (base) => ({ ...base, background: 'rgba(255, 0, 0, 0.5' }), 
                    // content: {},
                    // spinner: {}
                  }}
                // text='Fetching List...'
                >
                <p style= {{ height: "100vh", background: 'rgba(0, 0, 0, 0.01'  }}></p>
            </LoadingOverlay> 
            // </div>
            : 
            <CardDeck>{
                animeList && animeList.map(each => 
                    <ListItem each= {each} key= {each._id} />
                )
            }</CardDeck>
            }
        </Container>
    )
}

export default AnimeLists
