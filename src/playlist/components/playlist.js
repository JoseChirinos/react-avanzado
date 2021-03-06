// Dependences
import React from 'react';
// Modules
import Media from './media';
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
	return (
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <Media
								{...item}
								key = {item.id}
								handleOpen = { props.handleOpen }
							/>
				})
			}
		</div>
	)
}

export default PlayList;
