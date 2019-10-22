import React from 'react';
import Carousel from './Carousel';

function Accordion() {
    const FoodDescription = [<Carousel />]
    const FoodTitle = ['Lunch', 'Brunch', 'Dinner']

    const mappedFoodTitle = FoodTitle.map((item, idx) => {
        return (

            <div key={idx} className="card-header" >
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {item}
                    </button>
                </h5>
            </div>
        )

    });
        const mappedFoodDescription = FoodDescription.map((item, idx) => {
            return (

                <div id={idx} className="card-body">
                    {item}
                </div>

            )
        })


    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="=HeadingONE">
                {mappedFoodTitle}
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {mappedFoodDescription}
                    </div>
                </div>
            </div>
        </div>
    )





}



export default Accordion; 