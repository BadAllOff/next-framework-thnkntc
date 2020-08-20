import React from "react";
import BookCard from "../Card/BookCard";
import AuthorsContainer from "../../AuthorCard/AuthorsContainer";
import SignUpToBook from "../Card/SignUpToBook";

class BookContainer extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <div className="card-columns">
        <BookCard book={book} />
        <AuthorsContainer authors={book.authorList} />
        <SignUpToBook book={book} />
      </div>
    );
  }
}

export default BookContainer;
