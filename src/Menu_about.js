import React, { useState} from 'react';
import { connect } from 'react-redux';
import './Menu_about.css'
import { actionCreators } from './store';
function Menu_about(props) {
    const eventhandler = (e) =>{

        props.addToDo(e.target.innerText);

        
    }
    return (
        <div className='menu_about'>
            <h3>{props.name}</h3>
            {props.dic.map((item, index) => 
            <p key={item.name} onClick={eventhandler}>{`${item.name} ${item.price}`}</p>)}
        </div>
    );
}
function mapStateToProps(state) {
    console.log(state)

    return {toDos: state}
}
function mapDispatchToProps(dispatch) {

    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu_about);