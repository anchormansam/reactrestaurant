import React from 'react';
import Carousel from './Carousel';

function Accordion() {
    const FoodDescription = [<Carousel />]
    const FoodTitle = ['Lunch', 'Brunch', 'Dinner']

//     const foodMenuGenerator = .map((item, idx) => {
        
        
//         return (

//         <div class="carousel-caption d-none d-md-block">
//           <h2>Price</h2>
//           <h5>Title</h5>
//           <p>Description</p>
//         </div>

//     
//         )
//     })
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
                        <div>Here</div>
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