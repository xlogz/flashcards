import React,{ Fragment } from 'react';
import './styles.css';
import Tilt from 'react-tilt';
import Flip from 'react-reveal/Flip';
// import UndoIcon from '@material-ui/icons/Undo';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import StarRateIcon from '@material-ui/icons/StarRate';
import axios from 'axios';




export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = { show: false,
        				favorite: false}

    }

    handleClick = () => {
        this.setState({ show: !this.state.show });
    }

    handleEdit = () => {
    	console.log('editing');
    }

    handleFavorite = () => {

    	if(this.state.favorite === true){
    		console.log('handle favorite clicked');
    		console.log('deleting favorites');
    		console.log('cardset + this.props.id')
    		axios.delete('/favorites/delete',{headers : {userId: this.props.userId, cardSetId: this.props.id}}).then(results=>{
    			console.log(results);

    			this.setState({favorite: false});
    		})
    	}else{
    		console.log('handle favorite clicked');
    		console.log('adding favorites');
    		console.log('userId ' + this.props.userId + " // cards " + this.props.id)
    		axios.put('/favorites/add', {userId: this.props.userId, cardSetId: this.props.id}).then(results=>{
    			console.log(results);
    			this.setState({favorite: true})
    		});
    	}

    }

    isFavorite = async() =>{
    	await axios.put('/favorites/check', {userId: this.props.userId, cardSetId: this.props.id}).then(results=>{
    		console.log('results from checking is favorite');
    		console.log(results.data);
    		    console.log(this.state.favorite);
    			console.log(this.state.favorite);
    			console.log(this.state.favorite);
    			console.log(this.state.favorite);
    		if(results.data){
    			this.setState({favorite: true});
    		}else{
    			this.setState({favorite: false});
    		}
    	})
    }

    async componentDidMount(){
    	await this.isFavorite();

    }

	render(){
		let contents = "";
		if(this.state.show === true){;
			 contents = (

			 	<Tilt className="Tilt dashboard-card-two" key={this.props.key} options={{ max : 25 }} style={{ height: 225, width: 450 }}>
			 				{/*<div className="dashboard-card-return" onClick={this.handleClick}> <UndoIcon/> </div>*/}
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
						<div className="Tilt-inner" id={this.props.tabIndex} onClick={this.handleClick}>
							<Link to={'/cards?id=' + this.props.id} ><button className="dashboard-card-quiz-btn"> Quizme </button></Link>

						</div>
					</Tilt>
				)
			}else{
				 contents = (
					<Tilt className="Tilt dashboard-card-one" key={this.props.key} options={{ max : 15 }} style={{ height: 225, width: 450 }}>

						<div className="Tilt-inner" id={this.props.tabIndex}  >
							<div className="card-buttons">
								<div className="dashboard-card-edit-btn">
									<EditIcon onClick={this.handleEdit}/>
								</div>
								{this.state.favorite === true ? 
									(<div className="dashboard-card-favorite-btn yellow">
										<StarRateIcon  onClick={this.handleFavorite}/>
									</div>)
								:

								(<div className="dashboard-card-favorite-btn white">
									<StarRateIcon  onClick={this.handleFavorite}/>
								</div>)
								}
								

								


							</div>
							<div className="card-content" onClick={this.handleClick}>
								
								<div className="dashboard-card-title">{this.props.title}</div>
								<div className="dashboard-card-count"># of cards: {this.props.cardcount}</div>
								<div className="dashboard-card-highscore">Highest Score: {this.props.highestScore}</div>
							</div>

						</div>
						{/*<div className="lines">
							<div className="lines-blue"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							<div className="lines-red"></div>
							
						</div>*/}

					</Tilt>
					)
			}
		
		return(
			<Fragment>
			<div className="card-flip-container">
				<Flip left opposite spy={this.state.show} exit={false} className="flip-card">
					{ contents }
				</Flip>
			</div>



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