import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <li className="PostInList">
      <div>
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </div>
      <button onClick={onDelete}>x</button>
    </li>
  );
};

export default PostInList;
