// Dependences
import React, { Component } from 'react';
// Modules
import PlayList from './playlist';
// Styles
import './category.css';

class Category extends Component{
	render(){
		const categories = this.props.data.categories;
		console.log(categories);
		return(
			<div className="Category-list">
				{
					categories.map( (category) =>{
						return (
							<div className="Category" key = { category.id }>
								<h4 className="Category-description">{ category.description }</h4>
								<h2 className="Category-title">{ category.title }</h2>
								<PlayList
									{...category}
									key = { category.id }
								/>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Category;