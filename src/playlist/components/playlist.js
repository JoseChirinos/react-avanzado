// Dependences
import React, { Component } from 'react';
// Modules
import Media from './media';
// Styles
import './playlist.css';


class PlayList extends Component{
	render(){
		const playlist = this.props.data.categories[0].playlist;
		return (
			<div className="Playlist">
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
		)
	}
}

export default PlayList;