import Head from "next/head";

import BookList from "../components/Book/List/BookList";
import ScrollButton from "../components/helpers/ScrollButton";
import Layout from "../components/Layout";
import withLoader from "../HOC/withLoader";
import user from "../data/user.json";
import AuthContext from "../components/meta/AuthContext";
import {fetchData} from "../utils/fetch-data"


function Home({ books }) {
  return (
    <AuthContext.Provider value={user}>
      <Head>
        <title>Next Blog Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {books && <BookList books={books} isLoading={!books} />}
        <ScrollButton
          scrollStepInPx="50"
          delayInMs="16.66"
          ShowAtPosition={global.innerHeight / 3}
          TransitionClassName="visible"
        />
      </Layout>
      <div id="modal-root"></div>
    </AuthContext.Provider>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      books: await fetchData(),
    },
  };
}

export default withLoader(Home);