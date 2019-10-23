import React from 'react';
import Axios from 'axios';

class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_items: [],
        };
    };

    random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    getMenuItems(course, itemNumber) {
        var newImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8updated.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'];
        var tempMenuImage = newImages;
        
        Axios.get(`https://entree-f18.herokuapp.com/v1/menu/${itemNumber}`)
            .then((Response) => {
                let menu_items = Response.data.menu_items;

                menu_items.map((item, idx) => {

                    item.image = this.random_item(tempMenuImage);
                    tempMenuImage.splice(tempMenuImage.indexOf(item.image), 1);
                    console.log(tempMenuImage)

                    item.price = `$` + item.description.length;
                    item.title = item.description.split(' ')[1].toUpperCase();
                });

                this.setState({
                    menu_items: menu_items
                });

            });
    }

    componentDidMount() {
        this.getMenuItems(this.props.menuType, this.props.numberOfItems);
    }

    render() {
        return (
            this.state.menu_items.map((item, idx) => {
                var path = `/images/${item.image}`;
                return (
                    <React.Fragment>
                        <div key={idx} className={`carousel-item ${idx === 0 && 'active'}`}>
                            <img className="d-block w-100" id="foodImage" src={path} alt="Food" />

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