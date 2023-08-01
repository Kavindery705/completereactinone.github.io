import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './style/navigations.module.css'
function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReactInOne</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link to={'/usestate'} className={styles.linkin}>usestateCount1</Link><br />
              
              <Link to={'/props'} className={styles.linkin}>Propsconcept</Link><br />
              <Link to={'/childroute'} className={styles.linkin}>ChildRoute</Link><br />
              <Link to={'/useeffectd'} className={styles.linkin}>Use Effectdemo</Link><br />
              <Link to={'/fetchapi'} className={styles.linkin}>FetchApi</Link><br />
              <Link to={'/axiosapi'} className={styles.linkin}>AxiosApi</Link><br />
              <Link to={'/asyncawaitapi'} className={styles.linkin}>AsyncAwaitApi</Link><br />
              <Link to={'/formvalidation'} className={styles.linkin}>FormValidation</Link><br />
              <Link to={'/crudapi'} className={styles.linkin}>CRUDApi</Link><br />
              <Link to={'/localstorage'} className={styles.linkin}>LocalStorage</Link><br />
              <Link to={'/localstorage2'} className={styles.linkin}>LocalStorage2</Link><br />
              <Link to={'/useref'} className={styles.linkin}>Useref</Link><br />
              <Link to={'/propsdrilling'} className={styles.linkin}>Props Drilling</Link><br />
              <Link to={'/usecontext'} className={styles.linkin}>UseContext</Link><br />
              <Link to={'/customhooks'} className={styles.linkin}>CustomHooks</Link><br />
              <Link to={'/usereducer'} className={styles.linkin}>UseReducer</Link><br />
              {/* <Link to={'/Mycomponentprops'} className={styles.linkin}>Mycomponentprops</Link><br /> */}
              
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;