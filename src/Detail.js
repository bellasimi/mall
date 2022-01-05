import React, { useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components';


let 새박스 = styled.h4`
    font-size : 30px;
    padding : 20px;
    color : ${ props => props.색상 }
`;


function Detail(props){

    let { id } =useParams();
    let history = useHistory();

    return(
        <div className="container">
               <새박스 색상 = 'red' >Detail</새박스>

              <div className="row">
                <div className="col-md-6">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                  <h4 className="pt-5">{props.shoes[id].title}</h4>
                  <p>{props.shoes[id].content}</p>
                  <p>{props.shoes[id].price}</p>
                  <button className="btn btn-danger">주문하기</button>
                  <button className="btn btn-danger" onClick={()=>{history.goBack()}}>주문취소</button>
                  <button className="btn btn-danger" onClick={()=>{history.push("/anywhere")}}>아무거나</button>
                </div>
              </div>
        </div>
    )
}

export default Detail;