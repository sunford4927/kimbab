import React from 'react';

function Makebox({name, price,props, } ) {
    const value = `${name} ${price}`
    const array = props.toDos.choice;
    let count = array.filter(element => name === element.name).length;


    return (
        <div className='makebox' >
            {value}
            <input className='menu_count'  value={count} disabled></input>
            <div className='updown'>
                <button className='up' onClick={(e)=> props.addToDo(value)}>+</button>
                <button className='down' value={name} onClick={(e)=>props.deleteToDo(value)}>-</button>
            </div>
        </div>
    )
    }

export default Makebox;