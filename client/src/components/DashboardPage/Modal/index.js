import React from 'react';
import './styles.css';
import axios from 'axios';



class Modal extends React.Component{

constructor(props){
	super(props);
	this.state = {
		title:''
	}
}

componentDidMount(){


}

hideModal = e => {

		document.getElementsByClassName("modal-wrapper")[1].style.display = 'none';
		document.getElementById("root").style.overflow = 'inherit';

		document.getElementsByClassName("modal-wrapper")[0].style.display = 'none';
		document.getElementById("root").style.overflow = 'inherit';

}



render(){


	return(<div className={"modal-wrapper modal-" + this.props.name} >
				<div className={"modal-background modal-" + this.props.name} onClick={this.hideModal}></div>

				<div className="modal-container">
					<div className="modal">
						<div className="modal-header">{this.props.header}</div>
						<div className="modal-body">
								{this.props.body}
						</div>
						<div className="modal-footer">{this.props.footer}</div>
					</div>	
				</div>

			</div>)
}
}

export default Modal;