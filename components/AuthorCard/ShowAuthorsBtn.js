import React from "react";

const ShowAuthorsBtn = ({ authors_count, showAllAuthors, toggleShowAll }) => {
  return (
    <div className="card border-primary">
      <div className="card-body">
        <button className="btn btn-block btn-primary" onClick={toggleShowAll}>
          {showAllAuthors
            ? `Show only 3 Authors`
            : `Show all ${authors_count} Authors`}
        </button>
      </div>
    </div>
  );
};

export default ShowAuthorsBtn;
