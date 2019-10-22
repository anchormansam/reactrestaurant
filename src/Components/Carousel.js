import React from 'react';
import ApiCall from './ApiCall';



const newImages = ['1.jpg', '2.jpg', '3.jpg',];

function Carousel(props) {

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {/* <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
      </ol>
      <div className="carousel-inner">
        {/* <div className="carousel-item active">
          <img className="d-block w-100" src="./images/Sam.jpg" alt="First slide" />
        </div> */}
        {/* {mappedImages} */}
        <ApiCall />
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  )
};



export default Carousel; 
