import printFunc from "./printFunc";
import addImage from "./add-image";
import userString from "./user.json";

printFunc();
addImage();

const user = JSON.parse(userString);
console.log(user.firstName);
