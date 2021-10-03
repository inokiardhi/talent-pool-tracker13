import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import "./Detailpage.css"
import image from "../assets/image3.jpg"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getGameDetail } from '../redux/action/getDetail'

function Detailpage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {gameDetail} = useSelector((state) => state.gameDetails)
    console.log(gameDetail)
    useEffect(() => {
        dispatch(getGameDetail(id))
     }, [dispatch]);
    return (
        <>
            <div className="container-main" style={{backgroundImage:`url(${gameDetail.background_image})`}}>
                <div className="gradient"></div>
                <div className="container textColorize pt-5 position-relative">
                    <h1 className="pt-5">{gameDetail.name}</h1>
                    <div className="mt-2 btn-size">
                        <Button variant="outline-warning me-3">My game</Button>
                        <Button variant="outline-success">+ Wishlist</Button>
                    </div>
                </div>
            </div>
            <div className="container textColorize mb-5">
                    <div className="my-5 d-flex">
                        <h3 >{gameDetail.rating}</h3>
                        <div className="v-divider mx-4"></div>
                        <h3 >{gameDetail.ratings_count}</h3>
                    </div>
                    <div className="container-desc mt-2 d-flex flex-wrap">
                        <div className="me-5">
                            <h6>Release date :</h6>
                            <span>{gameDetail.released}</span>
                        </div>
                        <div className="me-5">
                            <h6 >Genres :</h6>
                            {gameDetail?.genres?.map(item => (<span className="me-2">{(item.name)}</span>))}
                        </div>
                        <div className="me-5">
                            <h6 >Website :</h6>
                            <a className="text-decoration-none" href={gameDetail.website} target="_blank">{gameDetail.website}</a>
                        </div>
                        <div className="me-5">
                            <h6 >Platforms :</h6>
                            {gameDetail?.parent_platforms?.map(item => (<span className="me-2">{(item.platform.name)}</span>))}
                        </div>
                    </div>
                <h4 className="mt-5">Description</h4>
                <p className="desc">{gameDetail.description_raw}</p>
            </div>
        </>
    )
}

export default Detailpage
