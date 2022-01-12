import React, { useState,useEffect,useContext } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { axios } from 'axios';
import { leftCon } from './App.js';
import { CSSTransition } from 'react-transition-group';
import { Container,Navbar,Nav,NavDropdown,FormControl,Button,Form} from 'react-bootstrap';
let 새박스 = styled.h4`
    font-size : 30px;
    padding : 20px;
    color : ${ props => props.색상 }
`;


function Detail(props){

    let { id } = useParams();
    let history = useHistory();
    //let [alert,setAlert] = useState(document.querySelector('.my-alert2'));
    let [alert,setAlert] = useState(true);
    /* 시작할 떄 한번 실행
    useEffect(()=>{
            axios.get()
    },[]);*/
    useEffect(()=>{
        let 타이머 = setTimeout(()=>{setAlert(false)},2000);
        return ()=>{clearTimeout(타이머)}
    },[alert]);

        /*return function 함수명(){
            //컴포넌트가 사라질 때 코드 실행 (언마운트시)
        }
         이거 아냐 위처럼 플래그 만들기로 껐다 켰다 해야됨
            let 타이머 =
            setTimeout(()=>{
               alert.setAttribute('style','visibility: hidden')
            },200)*/

    let [content,setContent] = useState("");
    let leftArr = [...props.left];
    let left = useContext(leftCon);
    let [tab,setTab] = useState(0);
    let [yesTab,setYesTab] = useState(false);

    const order = ()=>{
         if(leftArr[id]>0){
             leftArr[id] -= 1;
             props.setLeft(leftArr);
          }
    }
    return(
        <div className="container">
              <새박스 색상 = 'red' className="black">Detail</새박스>
              { alert===true
                    ? <div className="my-alert2" value="야호">
                        <p>재고가 얼마 남지 않았습니다!!</p>
                      </div>
                    : null
              }
              <input onChange={(e)=>{setContent(e.target.value)}}/>

              <div className="row">
                <div className="col-md-6">
                  <img src={require("./img/"+props.shoes[id].img)} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                  <h4 className="pt-5">{props.shoes[id].title}</h4>
                  <p>{props.shoes[id].content}</p>
                  <p>{props.shoes[id].price}</p>
                  <p>재고: {left[id]}개</p>
                  <Left left={props.left} id={id}/>
                  <button className="btn btn-danger" onClick={order}>주문하기</button>
                  <button className="btn btn-danger" onClick={()=>{history.push("/cart")}}>장바구니</button>
                  <button className="btn btn-danger" onClick={()=>{history.goBack()}}>주문취소</button>
                  <button className="btn btn-danger" onClick={()=>{history.push("/anywhere")}}>아무거나</button>
                </div>
              </div>
              <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                  <Nav.Link eventKey="link-0" onClick={()=>{setYesTab(false); setTab(0); }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" onClick={()=>{setYesTab(false); setTab(1);}}>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" onClick={()=>{setYesTab(false); setTab(2);}}>Option 3</Nav.Link>
                </Nav.Item>
              </Nav>

               <CSSTransition in={yesTab} classNames="yesTab" timeout={500}>
                    <TabCont tab={tab} setYesTab={setYesTab}/>
               </CSSTransition>


        </div>
    )

}

    function Left(props) {
        return (
            <p>재고 : {props.left[props.id]}개</p>

        )
    }

    function TabCont(props) {

        useEffect(()=>{
            props.setYesTab(true);
        });


        if(props.tab===0){
           return <div>0탭의 내용입니다.</div>
        }else if(props.tab===1){
           return <div>1탭의 내용입니다.</div>
        }else if(props.tab===2){
           return <div>2탭의 내용입니다.</div>
        }
    }

export default Detail;