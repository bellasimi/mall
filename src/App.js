import logo from './logo.svg';
import './App.css';
import { Container,Navbar,Nav,NavDropdown,FormControl,Button,Form} from 'react-bootstrap';

function App() {
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
     <header>
       <h1> SHOPPING</h1>
       <p>
         GET IT! BUT IT!
       </p>
       <p>
       </p>
     </header>
     /*원조 부트스트랩 용량이 더 크다. - link html에 넣어주기*/
     <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src="img/apple.jpg"></img>
                <h2>애플 노트북</h2>
                <p>1,000,000원</p>
            </div>
            <div className="col-md-4">
                   <img src="img/iphone.jpg"></img>
                   <h2>아이폰</h2>
                   <p>1,200,000원</p>
            </div>
            <div className="col-md-4">
                   <img src="img/ipod.jpg"></img>
                   <h2>아이팟</h2>
                   <p>200,000원</p>
            </div>
        </div>
     </div>
    </div>
  );
}

export default App;
