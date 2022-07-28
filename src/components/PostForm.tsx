import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
}

const PostForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAdd({ title, thought });
  };

  return (
    <form className="PostForm" onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <label htmlFor="thought">Thought</label>
      <textarea
        name="thought"
        id="thought"
        cols={30}
        rows={10}
        value={thought}
        onChange={(event) => setThought(event.target.value)}
        required
      ></textarea>
      <button>Add Post</button>
    </form>
  );
};

export default PostForm;
