// Dependences
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
// Modules
import Media from './media';
// Styles
import './playlist.css';


class PlayList extends Component{
	render(){
		const playlist = this.props.playlist;
		return (
			<Scrollbars style={{ height:250 }} renderTrackHorizontal={this.renderTrackHorizontal}>
				<div className="Playlist" style={{ width: 275*playlist.length }}>
					{
						playlist.map((item) => {
							/* option larga
							return <Media 
										type={item.type}
										cover={item.cover}
										title={item.title}
										author={item.author}
										key={item.id}
									/>
							*/
							return <Media
										{...item}
										key = {item.id}
									/>
						})
					}
				</div>
			</Scrollbars>
		)
	}
}

export default PlayList;