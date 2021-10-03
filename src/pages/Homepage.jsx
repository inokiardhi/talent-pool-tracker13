import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Homepage.css"
import ButtonMe from '../components/button/ButtonMe'
import CardMe from '../components/card/Card'
import { clearList, getGameList } from '../redux/action/getGameList'
import PaginationMe from '../components/pagination/PaginationMe'
import { Link } from 'react-router-dom'
import { getGameByGenre } from '../redux/action/getGamesByGenre'

const buttonGenre = [
    {
        genre: "Action",
        value: "action"
    },
    {
        genre: "Strategy",
        value: "strategy"
    },
    {
        genre: "Adventure",
        value: "adventure"
    },
    {
        genre: "Puzzle",
        value: "puzzle"
    },
    {
        genre: "Racing",
        value: "racing"
    }
];

function Homepage() {
    const dispatch = useDispatch();
    const {listGame, loading} = useSelector((state) => state.games);

    useEffect(() => {
       dispatch(getGameList());
    }, [dispatch]);

    const handlePage = (e) => {
        dispatch(clearList());
        dispatch(getGameList(e.target.value));
    };

    const handleGenre = (e) => {
        dispatch(clearList());
        dispatch(getGameByGenre(1, e.target.value));
        console.log(e.target.value);
    }


    return (
        <>
            <div className="container">
                <div className="d-flex mt-3 lineHeight">
                    <h3 className="me-2 mb-0">Genre</h3>
                    {buttonGenre.map(item => (<ButtonMe genre={item.genre} value={item.value} handleGenre={handleGenre}/>))}
                    <div class="divider flex-grow-1 ms-4 my-auto"></div>
                </div>
                
                <div className="d-flex flex-wrap justify-content-between container-content">
                    {loading ? listGame.length === 0 && <div className=" fontSizeMe text-light my-auto mx-auto">loading...</div> : listGame.length === 0 && <div className="fontSizeMe text-light my-auto mx-auto">No game Found :)</div>}
                    {listGame.map((item, idx) => (
                        <Link className="text-decoration-none" to={`/detail/${item.id}`}>
                            <CardMe image={item.background_image} name={item.name} rating={item.rating}/> 
                        </Link>
                    ))}
                    
                </div>
                
                <div className="d-flex justify-content-center">
                    <div class="divider-p flex-grow-1 me-4 my-auto"></div>
                    <PaginationMe handlePage={handlePage}/>
                </div>
            </div>
        </>
    )
}

export default Homepage
