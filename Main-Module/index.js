//maing module;

import {
  addItem,
  removeItem,
  getInventory
} from "../Exercise 1 - Named Exports and Imports/inventory.mjs";

addItem("Book");
addItem("Pen");
addItem("Pencil");

//console.log(getInventory());

removeItem("Pen");
//console.log(getInventory());

/*--------------end of first 1--------------*/

import Post from "../Exercise 2 - Default Export and Import/Post.mjs";

const myPost = new Post("Hello World", "This is my first post.");
myPost.publish();

/*--------------end of first 2--------------*/

import {
  capitalize,
  square
} from "../Exercise 3 - Re-exporting Modules/utils/index.mjs";

console.log(capitalize("hello"));
console.log(square(4));

/*--------------end of first 3--------------*/

async function loadConfig() {
  const themeModule = await import("../Exercise 4 - Dynamic Imports/theme.mjs");

  const currentHour = new Date().getHours();

  if (currentHour < 18) {
    themeModule.setLightTheme();
  } else {
    themeModule.setDarkTheme();
  }
}

// Execute the function

loadConfig();

/*--------------end of first 4--------------*/
import "../Exercise 5 - Side Effects in Modules/globalConfig.mjs";
