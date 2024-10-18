import React from 'react';
import ListItem from './ListItem';
import Tools from '../composnets/Tools';


const arr = [
    {
        title: "Appointemetn for October",
        descr: "mt andme fnkvnd jkd Today ndne week small",
        isActive: false
    },
    {
        title: "Appointemetn for November",
        descr: "mt andme fnkvnd jkd Today ndne week small",
        isActive: true
    }, {
        title: "Appointemetn for December",
        descr: "mt andme fnkvnd jkd Today ndne week small",
        isActive: false
    }
]

class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data:arr
        }
    }

    
    onListChange = (evt) => {
        console.log(evt.target.value)
        const value = evt.target.value;
        const newList = arr.filter((item) =>{
            if(value === 'all'){
                return true;
            }
            if(value === 'active'){
                return item.isActive ===true;
            }
            if(value === 'non-active'){
                return item.isActive ===false;
            }
            return false;
        })
        
        console.log(newList);

        // this.state = newList
        this.setState({
            data: newList
        })
    }

    render() {
        return (
            <Tools onAction={this.onListChange}>
                <div className="app-list">
                    {
                        this.state.data.map((obj) => {
                            return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                        })
                    }

                </div>
            </Tools>
        )

    };
}


export default List;
