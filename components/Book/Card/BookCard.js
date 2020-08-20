import React from "react";
import Row from "./Row";
import BookDetailsModal from "./BookDetailsModal";

class BookCard extends React.Component {
  render() {
    const {
      book: {
        description,
        authorList,
        coverImage,
        title,
        subscribersCount,
        pageCount,
        language,
        progress,
        mainPrice,
        minPrice,
        totalSum,
        expectedSum,
      },
    } = this.props;
    const authorNames = authorList.map((author) => author.name).join(", ");

    return (
      <div className="card border-dark">
        <img src={coverImage} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title text-uppercase">
            {title}
            {subscribersCount > 50 ? (
              <>
                <br />
                <span className="badge badge-pill badge-warning">
                  Bestseller!
                </span>
              </>
            ) : null}
          </h5>
          <Row label="Description">{description}</Row>
          <Row label="Author">
            {authorList.length === 0 ? "No author" : authorNames}
          </Row>
          <Row label="Pages count"> {pageCount} pages</Row>
          <Row label="Language">{language}</Row>
          <Row label="Progress">{progress}%</Row>
          <Row label="Main price">${mainPrice}</Row>
          <Row label="Minimum price">${minPrice}</Row>
          <Row label="Total sum">${totalSum}</Row>
          <Row label="Expected revenue"> ${expectedSum}</Row>
          <Row label="Subscribers" delimeter={false}>
            {subscribersCount}
          </Row>
          <BookDetailsModal book={this.props.book} />
        </div>
      </div>
    );
  }
}

export default BookCard;
