/*esling-disable*/
import logo from './logo.svg';
import './App.css';
import './main.scss';
import { Container,Navbar,Nav,NavDropdown,FormControl,Button,Form} from 'react-bootstrap';
import data from './data.js';
import {Link, Route, Switch, useHistory } from 'react-router-dom';
import React, { useState,useContext} from 'react';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';

let leftCon = React.createContext();

export { leftCon };

function App() {

    let [shoes,setShoes] = useState(data);
    let shoesArr = [...shoes];
    let [loading,setLoading] = useState(false);
    let [left,setLeft] = useState([10,11,12]);

  return (
   <div className="App">
     <Navbar bg="light" expand="lg">
       <Container fluid>
         <Navbar.Brand href="/">Shopping</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
           <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll
           >
             <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link  as = {Link} to="/detail/0">Detail</Nav.Link>
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

    <Switch>
         <Route exact path="/">
            <leftCon.Provider value={left}>
                <Main shoes={shoes} shoesArr={shoesArr}/>

            </leftCon.Provider>
                { loading==true
                    ? <Loading/>
                    : null
                }
                 <button className="btn btn-danger" onClick={()=>{
                    setLoading(true);
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{
                       setLoading(false);
                       shoesArr.push(...result.data);
                       console.log(shoesArr);
                       setShoes(shoesArr);
                    })
                    .catch(()=>{
                    setLoading(false);
                    alert("실패")});

                 }}>더보기</button>


         </Route>
         <Route path="/detail/:id" >
            <leftCon.Provider value={left}>
                <Detail shoes = {shoes} left={left} setLeft={setLeft}/>
            </leftCon.Provider>

         </Route>
         <Route path="/abc" component={Modal}></Route>
         <Route path="/cart">
            <Cart/>
         </Route>
         <Route path="/:id">
            <div>아무거나 Link로 적으면 이페이지를 보여줌</div>
         </Route>
     </Switch>
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
                                     <Device each={each} shoes={props.shoes} idx={idx} key={idx} />
                             )
                         })

                     }

                 </div>
             </div>
        </div>
    )
}

function Device(props) {

    let left = useContext(leftCon);
    let history = useHistory();

    return(
            <div className="col-md-4" onClick = {()=> { history.push("detail/"+props.shoes[props.idx].id)}}>
               <p>{props.each.id}</p>
                <img src= { 'img/' + props.shoes[props.idx].img}></img>
               <h2>{props.shoes[props.idx].title}</h2>
               <p>{props.shoes[props.idx].price}</p>
               <p>재고: {left[props.idx]}개</p>
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

function Loading() {

    return(
        <div className="loading">
            <p>로딩중입니다</p>
        </div>
    )
}



export default App;
