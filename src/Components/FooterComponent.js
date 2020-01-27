import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-5 col-sm-3 offset-1">
              <h5>Create a Custom Trip</h5>
              <Button color="primary" onClick={this.toggleModal}>Reserve Now</Button>
              <Modal
                isOpen={this.state.isModalOpen}
                toggle={this.toggleModal}
                className="customModal"
              >
                <ModalHeader className="modalHead" toggle={this.toggleModal}>
                  Let our experienced guides take you on the trip of your
                  dreams!
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
                      <Button
                        className="mt-2"
                        type="submit"
                        value="submit"
                        color="primary"
                      >
                        Reserve Trip
                      </Button>
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <h5>Follow Us</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                target="_blank"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                target="_blank"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                target="_blank"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                target="_blank"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
            </div>
            <div className="col-sm-4 text-center">
              <a role="button" className="btn btn-link" href="tel:+13115551234">
                <i className="fa fa-phone" /> 1-311-555-1234
              </a>
              <br />
              <a
                role="button"
                className="btn btn-link"
                href="mailto:notreal@notreal.co"
              >
                <i className="fa fa-envelope-o" /> newdayadventues@email.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
