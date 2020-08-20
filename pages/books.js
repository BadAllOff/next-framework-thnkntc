import BookList from "../components/Book/List/BookList";
import ScrollButton from "../components/helpers/ScrollButton";
import Layout from "../components/Layout";
import withBooks from "../HOC/withBooks";
import withLoader from "../HOC/withLoader";
import user from "../data/user.json";
import AuthContext from "../components/meta/AuthContext";

function Books(props) {
  return (
    <div>
      <AuthContext.Provider value={user}>
        <Layout>
          {/* <SimilarBooksList similarBooks={this.props.similarBooks} /> */}
          {props.books && (
            <BookList books={props.books} isLoading={!props.books} />
          )}
          <ScrollButton
            scrollStepInPx="50"
            delayInMs="16.66"
            ShowAtPosition={global.innerHeight / 3}
            TransitionClassName="visible"
          />
        </Layout>
        <div id="modal-root"></div>
      </AuthContext.Provider>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default withBooks(withLoader(Books));
