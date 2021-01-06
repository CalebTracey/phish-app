import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"

const TopNavBar = () => {
  let input;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/PhishApp">PhishApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/PhishApp">Home</Nav.Link>
            <Nav.Link href="/PhishApp/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <input ref={node => {
            input = node;
            }} /> */}
            <Button  variant="outline-success" 
            onPress={() => {
              this.props.navigation.navigate("/PhishApp/search")
                
            }}>Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }


export default TopNavBar;
