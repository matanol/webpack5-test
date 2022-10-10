function addDirTree() {
  const tree = __TREE__;
  const title = document.createElement("h1");
  title.innerText = tree.children.length;
  console.log(tree.children);
  const body = document.querySelector("body");
  body.appendChild(title);
}

export default addDirTree;
