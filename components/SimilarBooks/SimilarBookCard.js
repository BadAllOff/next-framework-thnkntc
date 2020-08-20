import React from "react";

const SimilarBookCard = ({ book, removeBookById, authors }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <button
          type="button"
          onClick={() => removeBookById(book.id)}
          className="btn btn-light"
        >
          <span>Not interested</span>
        </button>
        <img className="card-img-top" alt={book.title} src={book.cover_image} />
        <div className="card-body">
          <h6 className="card-title">{book.title}</h6>
        </div>
        {book.authors.length > 0 ? (
          <div className="card-footer">
            <small className="text-muted">
              {book.authors
                .map((author) => {
                  return author.name;
                }).join(", ")}
            </small>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SimilarBookCard;
