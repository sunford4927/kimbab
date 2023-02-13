import Header from "./Header";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/choice" element={<Menu/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
// # 2개 시키면 20%
// # 3개 시키면 25%
// # 4개 시키면 30%

// # 포장 주문은 전체 금액에서 10% 할인 청구
// # 매장 식사는 원래 금액 청구
// # 배달 주문은 전체 금액에서 배달료 8900원 추가 청구

// # 주문의 총 합과 내역에 대한 내용이 최종결과에 출력될 것
// # 총합을 출력 한 후 할인 내역이 따로 적용하여 출력 할 것
// # 프로그램 종료 직전까지의 매출의 총합을 조회시 출력 할 수 있게 할 것
// # 주문할때 포장/매장식사/배달을 선택하여 아래 조건을 적용되게 할 것