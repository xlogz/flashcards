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


	document.getElementsByClassName('modal-background')[0].addEventListener('click',()=>{
		document.getElementsByClassName('modal-wrapper')[0].style.display = 'none';
		document.getElementById("root").style.overflow = 'inherit';
	});
}

handleForm = e =>{
	e.preventDefault();
	const data = {};
	data.title = this.state.title;
	data.userId = this.props.userId;
	axios.post('/cards/newfolder', data).then(results =>{
		this.props.updateFolders();
		document.getElementsByClassName('modal-wrapper')[0].style.display = 'none';
		document.getElementById("root").style.overflow = 'inherit';
	})

}

handleTitle = e => {
	this.setState({title: e.target.value});
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
										<input type="text" placeholder="Title" onChange={this.handleTitle}/>
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