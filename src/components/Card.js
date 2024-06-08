import { useState } from "react";

function Card({id, image, info, price, name, removeTour}) {								//*****IMPORTANT*****

    const[readmore, setReadmore] = useState(false);

    const description = readmore ? info :`${info.substring(0, 200)}`;						//from here we understand that useState produces change wherever readmore is writtenlike here it will produce change in description in UI

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">

            <img src={image} className='image'></img>

            <div className="tour-info" >
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description" >
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>					//id was 1, 2, 3, 4, 5 this remove tour function should be there where ever the info about tour was stored
                Not Interested
            </button>
        </div>
    );
}
export default Card;
