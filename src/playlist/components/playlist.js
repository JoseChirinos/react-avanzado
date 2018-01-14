// Dependences
import React from 'react';
// Modules
import Media from './media';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/fullscreen';
// Styles
import './playlist.css';

/*
 *   Componentes Funcionales
 *   > Cuando necesitemos manejar el ciclo de vida de un componente 
 *	   utilizar componente de estado o puro (Component o PureComponent),
 *     en caso contrario cuando solo necesitemos renderizar la UI del 
 *	   componente sera uno Funcional.
 */

function PlayList(props){
	const playlist = props.data.categories[0].playlist;
	return (
		<div className="Playlist">
			<div className="Controls">
				<Play
					size={50}
					color="red"
				/>
				<Pause
					size={50}
					color="red"
				/>
				<Volume
					size={50}
					color="red"
				/>
				<FullScreen
					size={50}
					color="red"
				/>
			</div>
			{
				playlist.map((item) => {					
					return <Media
								{...item}
								key = {item.id}
							/>
				})
			}
		</div>
	)
}

export default PlayList;