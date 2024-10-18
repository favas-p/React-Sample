import React from 'react';
import Label from './Label';
import "./Listitem.css";


function ListItem(props){
  const{
    title,
    descr,
    isActive
  }= props;
    return (
          <div className="list-item">
            <div className="list-title">
              <h4>{title}</h4>
            </div>
            <div className="list-descr">
              {descr}
            </div>
            <div className="list-table">
              <Label onAction={() => {
                console.log('Parent Clicked');
              }} isActive={isActive}/>
              
            </div>
            
          </div>
    );
  }

  export default ListItem;