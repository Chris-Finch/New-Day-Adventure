import React, { Component } from 'react';
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
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      formValid: false,
      errors: {
        name: '',
        email: '',
        destination: '',
      }
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name = value.length < 5 ? 'Name must be 5 characters long' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid';
        break;
      case 'destination':
        errors.destination =
          value.length < 3 ? 'Must enter valid destination' : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
  };

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
    const { errors } = this.state;
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                className="lo-go"
                src="/assets/img/logo.png"
                alt="website logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="nav-items">
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
              <Button
                className="trip-button ml-5"
                color="info"
                onClick={this.toggleModal}
              >
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
              <Form onSubmit={this.handleChange} noValidate>
                <FormGroup>
                  <Label htmlFor="rating">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.name.length > 0 && (
                    <span className="error">{errors.name}</span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    type="text"
                    name="trip"
                    id="trip"
                    placeholder="Where To?"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.destination.length > 0 && (
                    <span className="error">{errors.destination}</span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
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
                  <Button
                    className="mt-3 inner-modal-button"
                    type="submit"
                    value="submit"
                    color="primary"
                  >
                    Let's Go!
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
