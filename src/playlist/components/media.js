import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

/*
 * 		Añadimos Eventos
 */

class Media extends Component{
	/* el constructor es con es6
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		console.log(this.props.title);
	}
	*/
	/* con es2017, se puede heredar con un arrow function gracias a stage2>(en el webpack) */
	handleClick = (event) => {
		console.log(this.props.title);
	}
	render(){
		const { type, title, author, image } = this.props;
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