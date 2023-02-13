import React from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

function Welcome(props) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        props.stayToDo(e.target.innerText);
        navigate('/choice');
    }
    return (
        <div className='welcome'>
            <span className='welcome_text'> <h3>반갑습니다. 이용하실 메뉴를 선택하여 주세요</h3></span>
            <br />
            <div className='welcome_playlist'>
            <div className='welcome_low' onClick={handleClick}>매장식사</div>
            <div className='welcome_low' onClick={handleClick}>포장</div>
            <div className='welcome_low' onClick={handleClick}>배달</div>
            </div>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return {toDos:state}
}
function mapDispatchToProps(dispatch) {
    return{
        stayToDo : (text) => dispatch(actionCreators.choiceToDo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);