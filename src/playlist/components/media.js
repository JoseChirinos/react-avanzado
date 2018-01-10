import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

/*
 * 		Añadimos States para poder modificar dinamicamente los datos
 */

class Media extends Component{
	/* con es2017 */
	state = {
		author: this.props.author
	}
	/* con es2016
	constructor(props){
		super(props);
		this.state = {
			author: props.author
		}
	}
	*/
	handleClick = (event) => {
		this.setState({
			author: 'Gary Guzman'
		});
	}
	render(){
		const { type, title, image } = this.props;
		const { author } = this.state;

		console.log(this.props);
		return(
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img
						className="Media-image"
						src={ image }
						alt=""
						width={260}
						height={160}
					/>
					<h3 className="Media-title">{ title }</h3>
					<p className="Media-author">{ author }</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string, // number,object,func,array
	type: PropTypes.oneOf(['video','audio'])
}

export default Media;