import React from "react";
import AuthorCard from "./AuthorCard";
import ShowAuthorsBtn from "./ShowAuthorsBtn";

class AuthorsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showAllAuthors: false };
    this.toggleShowAll = this.toggleShowAll.bind(this);
  }

  toggleShowAll() {
    this.setState(({showAllAuthors}) => ({ showAllAuthors: !showAllAuthors }));
  }

  render() {
    const { authors } = this.props;
    const showAllAuthors = this.state.showAllAuthors;
    const authorsToShow = showAllAuthors ? authors : authors.slice(0, 3);

    return (
      <>
        {authors.length > 3 && (
          <ShowAuthorsBtn
            authors_count={authors.length}
            showAllAuthors={showAllAuthors}
            toggleShowAll={this.toggleShowAll}
          />
        )}
        {authorsToShow.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </>
    );
  }
}

export default AuthorsContainer;
