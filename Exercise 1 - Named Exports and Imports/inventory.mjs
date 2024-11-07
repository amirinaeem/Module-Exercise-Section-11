const inventory = [];

//exporting add item function;
export const addItem = (item) => {
  inventory.push(item);
};

//exporting remove item function;
export const removeItem = (item) => {
  inventory.splice(inventory.indexOf(item), 1);
};

//getting the list of inventory;
export const getInventory = () => {
  return inventory;
};
