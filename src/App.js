import "./styles.css";
import treeData from "./data";
import Comment from "./components/Comment";

export default function App() {
  return (
    <div className="w-screnn h-screen">
      <h2>无限级循环</h2>
      <hr />
      {treeData.map((item) => (
        <Comment key={item.id} {...item} />
      ))}
    </div>
  );
}
