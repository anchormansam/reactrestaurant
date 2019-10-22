import React from 'react';
import Axios from 'axios';
import { privateEncrypt } from 'crypto';

class ApiCall extends React.Component {
    constructor() {
        super();
        this.state = {
            menu_items: [],
        };
    };

    getMenuItems(course, itemNumber) {
        Axios.get(`https://entree-f18.herokuapp.com/v1/menu/12`)
        .then((Response) => {
            let menu_items = Response.data.menu_items;
            
            console.log(Response.data.menu_items);
            
            menu_items.map((item, idx) => {
                item.image = "1.jpg";
                item.price = `$` + item.description.length;
                item.title = item.description.split(' ')[1].toUpperCase();                
            });
            
            this.setState({
                menu_items: menu_items
            });
            
        });
    }

    
    componentDidMount() {
        this.getMenuItems('Lunch', 4);
        this.getMenuItems('Brunch', 8);
        this.getMenuItems('Dinner', 12)
    }
    
    render() {
        return (
            this.state.menu_items.map((item,idx) => {
                var path = `/images/${item.image}`;
                return (
                    <React.Fragment>
                        <div key={idx} className={`carousel-item ${idx === 0 && 'active'}`}>
                            <img className="d-block w-100" src={path} alt="Food" />
                        
                            <div className="carousel-caption d-md-block text-primary">
                                <h2>{item.price}</h2>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </React.Fragment>
                )
        })
        );
    }
}
    
    
    export default ApiCall;