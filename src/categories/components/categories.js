import React from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search-container';

function Categories(props){
  return  (
    <div className="Categories">
      <SearchContainer />
      {
        props.categories.map( (item)=>{
          return (
            <Category
              key={item.id}
              {...item}
              handleOpen = { props.handleOpen }
            />
          )
        })
      }
    </div>
  )
}

export default Categories;
