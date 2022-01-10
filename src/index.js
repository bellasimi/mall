import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


let 기본값 = [
{id : 0, name : "애플", quan : 2 },
{id : 1, name : "애플2", quan : 1 },
{id : 2, name : "애플3", quan : 7 }
];

/*  state가 될 변수 관리:삭제 */
function reducer(state = 기본값, 디스패치){
    let copy = [...state];
    if(디스패치.type === "+"){
        copy[디스패치.idx].quan++;
        return copy

    }else if( 디스패치.type === "-"){
        if(copy[디스패치.idx].quan !=0){
            copy[디스패치.idx].quan--;
        }

        return copy
    }else{
        return state
    }
}

/* createStore() 거치면 변수가 state화 */
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
