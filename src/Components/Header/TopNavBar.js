import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import {Link} from "react-router-dom";

const TopNavBar = () => {
  let input;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">PhishApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <input ref={node => {
            input = node;
            }} /> */}
            <Button href="/PhishApp/search" variant="outline-success" >
            {/* onPress={() => {
              this.props.navigation.navigate('', {
                itemId: 86,
                otherParam: 'anything you want here',
            }}>Search */}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }


export default TopNavBar;
