import React from "react";
import ReactDOM from "react-dom";

import ModalContainer from "../ModalContainer/ModalContainer";
import Field from "../helpers/Field";

class ContactFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "unknown",
      email: "unknown@example.com",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen,
    }));
  }

  handleChange(fieldName, e) {
    this.setState({ [fieldName]: e.target.value });
  }

  handleSubmit(event) {
    console.log({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    event.preventDefault();
    this.toggle();
  }

  render() {
    const { author } = this.props;

    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.toggle()}
        >
          Write to author
        </button>
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <ModalContainer
              modalTitle={`Write to ${author.name}`}
              closeModal={() => this.toggle()}
            >
              <form onSubmit={this.handleSubmit}>
                <Field
                  name="email"
                  label="Email address"
                  value={this.state.email}
                  type="email"
                  inputType="input"
                  handleChange={(name, e) => this.handleChange(name, e)}
                  hint="We'll never share your email with anyone else."
                />
                <Field
                  name="name"
                  label="Your Name"
                  value={this.state.name}
                  type="input"
                  inputType="input"
                  handleChange={(name, e) => this.handleChange(name, e)}
                />
                <Field
                  name="message"
                  label="Your message"
                  value={this.state.message}
                  type="textarea"
                  inputType="textarea"
                  handleChange={(name, e) => this.handleChange(name, e)}
                  options={{ rows: "3", cols: "40" }}
                />
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </form>
            </ModalContainer>,
            document.getElementById("modal-root")
          )}
      </>
    );
  }
}

export default ContactFormModal;
