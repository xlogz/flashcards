import React,{ Fragment } from 'react';
import './styles.css';import Flip from 'react-reveal/Flip';
import Tilt from 'react-tilt';



export default class Card extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(event){
		event.preventDefault();
		console.log('hi');
	}

	render(){
		return(
			<Fragment>

			<Tilt className="Tilt dashboard-card" key={this.props.key} options={{ max : 25 }} style={{ height: 225, width: 450 }} >

				<div className="Tilt-inner" id={this.props.tabIndex} >
					<div className="dashboard-card-title">{this.props.title}</div>
					<div className="dashboard-card-count"># of cards: {this.props.cardcount}</div>
					<div className="dashboard-card-highscore">Highest Score: {this.props.highestScore}</div>

				</div>
				<div className="lines">
					<div className="lines-blue"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					<div className="lines-red"></div>
					
				</div>
			</Tilt>
			</Fragment>
			)
		
	}
}

// class FlipExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: false };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({ show: !this.state.show });
//   }
//   render() {
//     return (
//       <div>
//         <Flip left opposite when={this.state.show}>
//           <div className="dashboard-card" onClick={this.handleClick}>
// 					<div>{this.props.title}</div>
// 					<div># of cards: {this.props.cardcount}</div>
//  					<div>Highest Score: {this.props.highestScore}</div>

//  				</div>
//         </Flip>
//         <button
//           className="btn btn-success my-5"
//           type="button"
//           onClick={this.handleClick}
//         >
//           { this.state.show ? 'Hide' : 'Show' } Message
//         </button>
//       </div>
//     );
//   }
// }

// export default FlipExample;
//  