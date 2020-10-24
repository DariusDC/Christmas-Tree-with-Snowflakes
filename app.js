const tree = document.querySelector(".tree");
import { treeBoard } from "./tree.js";
import { colors } from "./colors.js";

treeBoard.forEach((row) => {
  const newRow = document.createElement("div");
  newRow.classList.add("row");
  row.forEach((cell) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    if (cell) {
      let classes = cell;
      classes = classes.split(" ");
      classes.forEach((clas) => newCol.classList.add(`${clas}`));
    }
    newRow.appendChild(newCol);
  });
  tree.appendChild(newRow);
});
