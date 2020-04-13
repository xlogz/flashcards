import React from 'react';
import { Fragment } from 'react'
import './styles.css'

export default class QAField extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (<Fragment><button onClick={this.props.deleteItem(this.props.index)}>Delete</button><input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>
							     
							     <hr/></Fragment>)
	}

	
}