import React, { useState, useEffect } from "react";
import data from "./data.js";
import Posts from "./Posts";
import Pagination from "./Pagination";
import shoe from "../nike.jpg";
import Header from "./Header.js";

const ProductPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(data);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header></Header>
      <img id="shoe" src={shoe} />
      <br></br>
      <h1>Board Decks</h1>
      <div class="container" id="products">
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProductPage;
