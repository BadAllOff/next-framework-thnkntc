import React from "react";

import SubscriptionsTermsModal from "./SubscriptionsTermsModal";

const SignUpToBook = ({ book }) => {
  return (
    <div className="card border-dark">
      <div className="card-body">
        <p className="card-text">
          Sign up and get latest information about "{book.title}"{" "}
        </p>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary btn-block">
                Sign up
              </button>
              <SubscriptionsTermsModal />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpToBook;
