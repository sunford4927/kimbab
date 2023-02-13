import React, { useState, useEffect } from "react";
import "./Basket.css";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import Makebox from "./Makebox";



function Basket(props) {

    
  const [price, setPrice] = useState(props.toDos.all_price);
  const [delivery, setDelivery] = useState(0);
  const [allprice, setAllprice] = useState(0)
  const [saleprice, setSaleprice] = useState(0)
  const [persent, setPersent] = useState(0)
  const [intro, setIntro] = useState('')


  const array = props.toDos.choice;
  const filteredArr = array.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  function baseline(value) {
    if (value == "배달") {
      setDelivery(8900);
    } else {
      setDelivery(0);
    }
  }
  useEffect(() => {
    console.log(1)
    return(baseline(props.toDos.visit), console.log(2));
  }, [props.toDos.visit]);

  function sale(value){
    if(value > 3){
        setPersent(30)
    } else if(value > 2){
        setPersent(25)
    } else if(value > 1){
        setPersent(20)
    } else {
        setPersent(0)
    }
}
  useEffect(() => {
    setPrice(props.toDos.all_price);
    sale(props.toDos.choice.length);
  }, [props.toDos.all_price]);
  function totalprice(value){
    if(value == '포장'){
        setAllprice(price-saleprice-((price-saleprice)*0.1))
        setIntro('(포장할인 10%)')
    } else {
        setAllprice(price-saleprice)
    }
}
  useEffect(() => {
  setSaleprice(price * persent / 100);
  totalprice(props.toDos.visit)
},)

  return (
    <div className="basket" style={{ 
        width : '100%',
        height : '300px'}}>
      <div className="basket_container">
        <span>주문 목록</span>
        <button className="result">ss</button>
        <br />
        <div className="output">
          <div className="sunford">
            {filteredArr.map((item, index) => (
              <Makebox
                key={item.id}
                name={item.name}
                price={item.price}
                props={props}
              />
            ))}
          </div>
          <div className="sunford4927">
            <p><span className="l_text">상품합계 : {price}원</span></p>
            <p><span className="l_text">상품할인 {saleprice}원 ({persent}%)</span></p>
            <p><span className="l_text">배달료 : {delivery}원</span></p>
            <p><span className="l_text">합계 : {allprice}원 {intro}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { toDos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    deleteToDo: (text) => dispatch(actionCreators.deleteToDo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
