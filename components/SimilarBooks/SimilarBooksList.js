import React from "react";
import SimilarBookCard from "./SimilarBookCard";

class SimilarBooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notInterested: [],
    };
  }

  removeBookById(id) {
    this.setState(({ notInterested }) => ({
      notInterested: [id, ...notInterested],
    }));
  }

  render() {
    const similarBooks = this.props.similarBooks;
    const notInterested = this.state.notInterested;
    const result = similarBooks
      .filter((el) => -1 == notInterested.indexOf(el.id))
      .slice(0, 3);

    return (
      <>
        {result.length != 0 ? (
          <div>
            <h2>Similar books</h2>
            <div className="row row-cols-1 row-cols-md-3">
              {result.map((book) => {
                return (
                  <SimilarBookCard
                    key={book.id}
                    book={book}
                    removeBookById={() => {
                      this.removeBookById(book.id);
                    }}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SimilarBooksList;
