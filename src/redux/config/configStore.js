// 중앙 데이터 관리소 (store)를 설정하는 부분

import { createStore } from "redux"; // store를 만드는 api
import { combineReducers } from "redux"; // 리듀서들을 하나로 묶는 api
import counter from "../modules/counter";

// rootReducer: 리듀서들을 모아 한개로 만들어 놓은 기본 리듀서
const rootReducer = combineReducers({
  // modules 폴더에 있는 리듀서들을 모아 넣어 전역에서 사용가 능하도록 함
  counter,
});

const store = createStore(rootReducer);

// store를 바깥으로 내보내 사용
export default store;
