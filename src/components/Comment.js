import treeData from "../data";

export default function Comment({ id, name }) {
  return (
    <div className="gt">
      {name}
      {treeData
        .filter((item) => item.parentId === id)
        .map((item) => (
          <Comment key={item.id} {...item} />
        ))}
    </div>
  );
}
