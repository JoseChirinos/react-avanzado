import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

/*
 * 		PureComponent: shouldComponentUpdate automatico
 */

class Media extends PureComponent{
	state = {
		author: this.props.author
	}
	/* this event execute in pages/containers/home.js
	handleClick = (event) => {
		this.setState({
			author: 'Gary Guzman'
		});
	}
	*/
	render(){
		const { type, title, cover } = this.props;
		const { author } = this.state;

		/*console.log(this.props);*/
		return(
			<div className="Media" onClick={ this.props.handleOpen }>
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
