import React from "react";
import ReactDOM from "react-dom";
import ModalContainer from "../../ModalContainer/ModalContainer";

class SubscriptionsTermsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen,
    }));
  }

  render() {
    return (
      <>
        <a className="btn btn-light" onClick={() => this.toggle()}>
          Subscribe and get free merch from the writer! Click to know more!
        </a>
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <ModalContainer closeModal={() => this.toggle()}>
              <div className="modal-body">
                <p>
                  Depending on the amount of the transfer, you can get a book
                  with personal signature of the author, merch (T-shirts, cups
                  and many others), and honorable mention in gratitude.
                </p>
                <p>Subscribe and get it all for free!</p>
                <button
                  type="button"
                  onClick={() => this.toggle()}
                  className="btn btn-primary"
                >
                  STFU and take my $$$ now!
                </button>
              </div>
            </ModalContainer>,
            document.getElementById("modal-root")
          )}
      </>
    );
  }
}

export default SubscriptionsTermsModal;
