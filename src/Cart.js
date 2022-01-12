import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
    return(
        <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경</th>
                </tr>
              </thead>
              <tbody>
              {
                 props.state.map((each,idx)=>{
                    return(
                        <tr key={each.id}>
                          <td>{ each.id }</td>
                          <td>{ each.title }</td>
                          <td>{ each.quan }</td>
                          <td>
                              <button onClick={()=>{ props.dispatch({type:"+",idx:idx}) }}>+</button>
                              <button onClick={()=>{ props.dispatch({type:"-",idx:idx}) }}>-</button>
                          </td>
                        </tr>
                    )
                 })
               }
              </tbody>
            </Table>
            {
                props.alert === true

                ?<div className="my-alert2">
                    <p>매진 임박!!</p>
                        <button onClick = {()=>{ props.dispatch({type:"off"}) }}>닫기</button>
                 </div>

                : null
            }
                <button onClick= {()=>{ props.dispatch({type:"on"}) }}>열기</button>
        </div>
    )
}

function makeProps(state){
console.log(state);
    return {
        state : state.reducer,
        alert : state.reducer2
    }

}

export default connect(makeProps)(Cart);

//export default Cart;