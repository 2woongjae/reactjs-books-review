import React from "react";
import BooksContainer from "../containers/BooksContainer";
import { Link } from "react-router-dom";

const Home = ({ token }) => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/signin">로그인</Link>
      </li>
    </ul>
    <BooksContainer token={token} />
  </div>
);

export default Home;
