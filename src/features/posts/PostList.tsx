import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
// import { ReactionButtons } from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";

export const PostsList = () => {
  const posts = useSelector((state: RootStateOrAny) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a: any, b: any) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post: any) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <PostAuthor userId={post.user} />
      {/* <ReactionButtons post={post.id} /> */}
    </article>
  ));
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
