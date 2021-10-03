import React from 'react'
import "./PaginationMe.css"

function PaginationMe(props) {
    const {handlePage} = props;
    return (
        <>
            <div class="btn-group mt-3 mb-3">
                <button value="1" onClick={handlePage}>1</button>
                <button value="2" onClick={handlePage}>2</button>
                <button value="3" onClick={handlePage}>3</button>
                <button value="4" onClick={handlePage}>4</button>
                <button value="5" onClick={handlePage}>5</button>
            </div>
        </>
    )
}

export default PaginationMe
