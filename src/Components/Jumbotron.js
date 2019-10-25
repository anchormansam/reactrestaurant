import React from 'react';

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.state = { show: false };
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

                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>

            </React.Fragment>
        )
    }

}

const Modal = ({ handleClose, show, children }) => {
    const showModal = show ? "modal display-block" : "modal display-none";

    return (
//         <div className={showModal} id="showModal" tabindex="-1" role="dialog">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Tomorrow's Times</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div className="modal-footer">
//         {/* <button type="button" className="btn btn-primary">Save changes</button> */}
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
        <div className={showModal}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};




export default Jumbotron;