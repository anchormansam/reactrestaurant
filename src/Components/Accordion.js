import React from 'react';
import Carousel from './Carousel';

function Accordion() {
 
    const FoodTitle = [
        {menuType: 'Appetizers', numberOfItems: 8},
        {menuType: 'Lunch', numberOfItems: 5},  
        {menuType: 'Brunch', numberOfItems: 8},
        {menuType: 'Dinner', numberOfItems: 12},
        {menuType: 'Late-Night', numberOfItems: 7},
    
    ]
    const accordionCards = FoodTitle.map((item, idx) => {
        
        var collapseID = `collapse${idx}`;
        var collapseDivID = `#${collapseID}`;
        return (
            <div key={idx} className="card">
                <div className="card-header" id="=HeadingONE">
                    <div key={idx} className="card-header" >
                        <h5 className="mb-0">
                            <button 
                                className="btn btn-link" 
                                data-toggle="collapse" 
                                data-target={collapseDivID} 
                                aria-expanded="true" 
                                aria-controls={collapseID}>
                                {item.menuType}
                            </button>
                        </h5>
                    </div>
                </div>

                <div id={collapseID} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <div>
                            <Carousel 
                                menuType = {
                                    item.menuType
                                }
                                numberOfItems={
                                    item.numberOfItems
                                }
                            />
                        </div>
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