import printFunc from "./printFunc";
import addImage from "./add-image";
import addDirTree from "./add-dir-tree";
import userString from "./user.json";

printFunc();
addImage();
addDirTree();

const user = JSON.parse(userString);
console.log(user.firstName);
