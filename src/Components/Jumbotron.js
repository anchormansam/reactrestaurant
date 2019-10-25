import React from 'react';

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { show: false };
        this.showModal = this.showModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <React.Fragment>

                <div className="jumbotron">
                    <h1 className="display-2" id="Title">TOMORROW'S</h1>
                    <h3 className="lead">WHERE TODAY'S FOOD CHANGES TOMORROW!</h3>
                    <hr className="my-4" />
                    <p>"BEST BURNT MUFFIN BOTTOMS THIS SIDE OF THE MISSISSIPPI" - RANDOM DINER</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" onClick={this.showModal} role="button">TIMES AND LOCATION</a>
                    </p>

                </div>

                <Modal show={this.state.show} hideModal={this.hideModal} />


            </React.Fragment>
        )
    }

}

const Modal = ({ hideModal, show }) => {
    const showModal = show ? "modal d-block" : "modal d-none";

    return (
        <div className={`modal${showModal}`} id="showModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <a href="https://www.google.com/maps/place/Awesome+Inc/@38.0420621,-84.4948785,17z/data=!3m1!4b1!4m5!3m4!1s0x884244e842d5acf7:0x92c7783d2b2a2d15!8m2!3d38.0420621!4d-84.4926845">Tomorrow's 348 East Main Street</a>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5>Sunday: 10am - 1am </h5>
                        <h5>Monday: 10am - 1am </h5>
                        <h5>Tuesday: 10am - 1am </h5>
                        <h5>Wednesday: 10am - 1am </h5>
                        <h5>Thursday: 10am - 1am </h5>
                        <h5>Friday: 10am - 2am </h5>
                        <h5>Saturday: 10am - 2am </h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => hideModal()} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Jumbotron;