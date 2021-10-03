import React from 'react'
import './ButtonMe.css'

function ButtonMe(props) {
    const {genre, value, handleGenre} = props;
    return (
        <>
            <button className="ButtonMe mx-1" value={value} onClick={handleGenre}>{genre}</button>
        </>
    )
}

export default ButtonMe
