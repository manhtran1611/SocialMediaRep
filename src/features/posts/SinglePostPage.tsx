import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { PostAuthor } from "./PostAuthor";
// import { ReactionButtons } from "./ReactionButtons";
export const SinglePostPage = ({ match }: any) => {
  const { postId } = match.params;

  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <PostAuthor userId={postId} />
        {/* <ReactionButtons post={postId} /> */}
      </article>
    </section>
  );
};
