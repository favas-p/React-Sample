import React from 'react';
import "./Label.css"


// function Label() {
//     return <span>Label A </span>
// }

class Label extends React.Component {
    render (){
        const props = this.props
        const style = props.isActive ? {background: 'green'} : {background: 'orange'}
        return <span onClick={props.onAction} className='list-label-item' style={style}> {props.isActive ? 'Active' : 'Non Active'}</span>;
    }
}

export default Label;