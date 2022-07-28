import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Grandma", thought: "Here's Johnny!" },
    { title: "Grandpa", thought: "He left and never came back" },
  ]);

  const addPost = (post: Post): void => {
    setPosts((prev) => {
      const newList = prev.slice(0);
      newList.unshift(post);
      return newList;
    });
  };
  const deletePost = (index: number): void => {
    setPosts((prev) => {
      const newList = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <main className="SocialPosts">
      <h1>My Thoughts</h1>
      <button className="new-thought">New Thought</button>
      <PostForm onAdd={addPost} />
      <ul>
        {posts.map((post, index) => (
          <PostInList post={post} onDelete={() => deletePost(index)} />
        ))}
      </ul>
    </main>
  );
};

export default SocialPosts;
