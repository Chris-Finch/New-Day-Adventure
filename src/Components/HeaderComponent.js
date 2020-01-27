import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>

        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img  className="lo-go" src="/assets/img/logo.png" alt="website logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                       <i className="icon fa fa-lg" /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/iceland">
                       <i className="icon fa fa-lg" /> Iceland
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/italy">
                       <i className="icon fa fa-lg" /> Italy
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/peru">
                       <i className="icon fa fa-lg" /> Peru
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/thailand">
                       <i className="icon fa fa-lg" /> Thailand
                    </NavLink>
                </NavItem>
              </Nav>
              <Button className="trip-button ml-5" color="info" onClick={this.toggleModal}>
                  Custom Trip
              </Button>
            </Collapse>
          </div>

          {/* Modal */}

          <Modal
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
            className="customModal"
          >
            <ModalHeader className="modalHead" toggle={this.toggleModal}>
              Let our experienced guides take you on the trip of your dreams!
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup onSubmit={values => this.handleSubmit(values)}>
                  <Label htmlFor="rating">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Destination</Label>
                  <Input
                    type="text"
                    name="trip"
                    id="trip"
                    placeholder="Destination"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Destination"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Number of Travelers</Label>
                  <Input type="select" name="select" id="travelerSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  <Button className="mt-2" type="submit" value="submit" color="primary">
                    Reserve Trip
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
