// Dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import './media.css';

class Media extends Component{
	state = {
		author: this.props.author
	}
	handleClick = (event) => {
		this.setState({
			author: 'Gary Guzman'
		});
	}
	render(){
		const { type, title, cover } = this.props;
		const { author } = this.state;

		console.log(this.props);
		return(
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img
						className="Media-image"
						src={ cover }
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
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string, // number,object,func,array
	type: PropTypes.oneOf(['video','audio'])
}

export default Media;