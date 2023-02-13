import React from "react";
import "./Menu.css";
import { nudle, kim_bab, dongas, tendong, soup, bread, bignudle,rice} from "./content";
import Menu_about from "./Menu_about";
import Basket from "./Basket";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const nav = useNavigate();
  function movepage(){
    nav("/");
  }
  return (
    <div className="menu">
        <Basket />
        

          <button onClick={movepage} >←</button>
      <div className="menu_container">
        
        <div className="menu_row">
          <Menu_about name="김밥" dic={kim_bab} />
          <Menu_about name="라면" dic={nudle} />
          <Menu_about name="돈까스" dic={dongas} />
          <Menu_about name="덥밥" dic={tendong} />
        </div>
        <div className="menu_row">
          <Menu_about name="찌개" dic={soup} />
          <Menu_about name="떡볶이" dic={bread} />
          <Menu_about name="우동" dic={bignudle} />
          <Menu_about name="식사" dic={rice} />
        </div>

      </div>

    </div>
  );
}

export default Menu;
