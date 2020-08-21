import React from "react";
import BookContainer from "./BookContainer";
import withLoader from "../../../HOC/withLoader";


const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookContainer key={book.id} book={book} />
      ))}
    </div>
  );
};

export default withLoader(BookList);
