import React from 'react';
import './styles.css';



class Modal extends React.Component{

componentDidMount(){


	document.getElementsByClassName('modal-background')[0].addEventListener('click',()=>{
		document.getElementsByClassName('modal-wrapper')[0].style.display = 'none';
		document.getElementById("root").style.overflow = 'inherit';
	});
}

handleForm = e =>{

}


render(){


	return(<div className="modal-wrapper">
				<div className="modal-background"></div>

				<div className="modal-container">
					<div className="modal">
						<div className="modal-header">Add New Folder</div>
						<div className="modal-body">
								<div className="modal-body-content">
									<form onSubmit={this.handleForm}>
										<input type="text" placeholder="Title"/>
										<button className="modal-add-new-btn">Submit</button>
									</form>
								</div>
						</div>
						<div className="modal-footer">&nbsp;</div>
					</div>	
				</div>

			</div>)
}
}

export default Modal;