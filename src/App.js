/*esling-disable*/
import logo from './logo.svg';
import './App.css';
import { Container,Navbar,Nav,NavDropdown,FormControl,Button,Form} from 'react-bootstrap';
import React, { useState } from 'react';
import data from './data.js';
import {Link, Route, Switch } from 'react-router-dom';

function App() {

    let [shoes,setShoes] = useState(data);

  return (
   <div className="App">
     <Navbar bg="light" expand="lg">
       <Container fluid>
         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
           <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll
           >
             <Nav.Link href="#action1">Home</Nav.Link>
             <Nav.Link href="#action2">Link</Nav.Link>
             <NavDropdown title="Link" id="navbarScrollingDropdown">
               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action5">
                 Something else here
               </NavDropdown.Item>
             </NavDropdown>
             <Nav.Link href="#" disabled>
               Link
             </Nav.Link>
           </Nav>
           <Form className="d-flex">
             <FormControl
               type="search"
               placeholder="Search"
               className="me-2"
               aria-label="Search"
             />
             <Button variant="outline-success">Search</Button>
           </Form>
         </Navbar.Collapse>
       </Container>
     </Navbar>


     <Route exact path="/">
        <Main shoes={shoes}/>
     </Route>
     <Route path="/detail" component={Detail}></Route>
     <Route path="/abc" component={Modal}></Route>

     /*원조 부트스트랩 용량이 더 크다. - link html에 넣어주기*/

   </div>
  );
}

function Main(props) {
    return(
        <div>
             <header>
               <h1> SHOPPING</h1>
               <p>
                 GET IT! BUT IT!
               </p>
               <p>
               </p>
             </header>
             <div className="container">
                 <div className="row">
                     {
                         props.shoes.map((each,idx) => {
                             return(
                                     <Device each={each} shoes={props.shoes} idx={idx} key={idx}/>
                             )
                         })
                     }
                 </div>
             </div>
        </div>
    )
}

function Detail(){
    return(
        <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                  <h4 className="pt-5">상품명</h4>
                  <p>상품설명</p>
                  <p>120000원</p>
                  <button className="btn btn-danger">주문하기</button>
                </div>
              </div>
        </div>
    )
}
function Device(props) {
    return(
            <div className="col-md-4">
                   <p>{props.each.id}</p>
                   <img src= { 'img/' + props.shoes[props.idx].img}></img>
                   <h2>{props.shoes[props.idx].title}</h2>
                   <p>{props.shoes[props.idx].price}</p>

            </div>
    );
}

function Modal(){

    return(
        <div>
            <p>ABC페이지</p>
        </div>
    );

}

export default App;
