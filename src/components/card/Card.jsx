import React from 'react'
import "./Card.css"

function CardMe(props) {
    const {image, name, rating} = props;

    const coloring = () => {
        if(rating <= 2.00){
            return `"card-text cardMe-rating-red my-auto"`;
        } else if(rating <= 3.50){
            return `"card-text cardMe-rating-yellow my-auto"`;
        } else if (rating <= 5.00){
            return `"card-text cardMe-rating-green my-auto"`;
        };
    };
    console.log(coloring())
    return (
        <>
            <div class="cardMe my-4">
                <div className="cardMe-image-container">
                    <img src={image} class="cardMe-image" alt="..."/>
                </div>
                <div className="d-flex mx-2 py-2 cardMe-text-container">
                    <div class="card-text flex-grow-1" style={{fontSize: '0.9em'}}>{name.length > 30 ? name.substring(0,29) + " ..." : name}</div>
                    <label className={coloring()}>{rating}</label>
                </div>
            </div>
        </>
    )
}

export default CardMe
