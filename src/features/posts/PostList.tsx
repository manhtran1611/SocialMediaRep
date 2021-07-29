import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

export const PostsList = () => {
  const posts = useSelector((state: RootStateOrAny) => state.posts);
  const renderedPosts = posts.map((post: any) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
