import Table from './cmp/Table'
import Form from './components/Form';
import Home from './components/Home';
import {Container,Row,Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,useHistory
} from "react-router-dom";
function App() {
  let history = useHistory();
  console.log("hitory:",history)
  const Navigate=()=>{history.push("/")}
  return (
    <div>
      <li><NavLink activeClassName="text-danger" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="text-danger" to="/form">Form</NavLink></li>
      <li><NavLink activeClassName="text-danger"  to="/form/table">Table</NavLink></li>
    <div className="App">
      {/* <Form />
      <Home /> */}
      <Container>
        <Row>
          <Col className='bg-info'></Col>
          <Col className=''>
          <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/form" exact>
            <Form />
          </Route>
          <Route path="/form/table">
            <Table />
          </Route>
          
      </Switch>
          </Col>
        </Row>
      </Container>
      <button onClick={Navigate}>Navigate</button>
    </div>
    </div>
  );
}

export default App;
