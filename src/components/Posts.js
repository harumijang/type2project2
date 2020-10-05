import React from "react";
import Product from "./Product";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container" id="products">
      <div class="row">
        {posts.slice(0, 2).map((post) => (
          <Product key={post.id} className="col" productData={post}></Product>
        ))}
      </div>
      <div class="row">
        {posts.slice(2, 4).map((post) => (
          <Product key={post.id} className="col" productData={post}></Product>
        ))}
      </div>
    </div>
  );
};

export default Posts;
