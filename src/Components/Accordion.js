import React from 'react';
import Carousel from './Carousel';

function Accordion() {
    const FoodDescription = [<Carousel />]
    const FoodTitle = ['Lunch', 'Brunch', 'Dinner']

    const accordionCards = FoodTitle.map((item, idx) => {
        var collapseID = `collapse${idx}`;
        var collapseDivID = `#${collapseID}`;
        return (
            <div className="card">
                <div className="card-header" id="=HeadingONE">
                    <div key={idx} className="card-header" >
                        <h5 className="mb-0">
                            <button 
                                className="btn btn-link" 
                                data-toggle="collapse" 
                                data-target={collapseDivID} 
                                aria-expanded="true" 
                                aria-controls={collapseID}>
                                {item}
                            </button>
                        </h5>
                    </div>
                </div>

                <div id={collapseID} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <div><Carousel /></div>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <div id="accordion">
            {accordionCards}
        </div>
    )





}



export default Accordion; 