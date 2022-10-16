let input = document.getElementById("inputdata");
let inputBtn = document.getElementById("btnadd");
let tsklist = document.getElementById("list");
const emptyimg = document.getElementById("emptyimg")
const foodListStatistics = document.getElementById("food-list-statistics");

const localStorageKey = "Taskitems";

document.addEventListener("DOMContentLoaded", () => {
  // localStorage fetch, draw ui.
  const fetchedFoodItems = [
    ...JSON.parse(localStorage.getItem(localStorageKey)),
  ];

  fetchedFoodItems.forEach((item) => {
    let newitem = document.createElement("li");

    let div = document.createElement("div"); //for list-item
    let divBtn = document.createElement("div");

    newitem.append(div, divBtn);

    // assigning textContent & className to newitem
    div.textContent = item.taskItem;
    newitem.className = "food-item";
    newitem.className = "flex lead bg-dark text-light rounded text-center px-5 py-3 my-2";

    divBtn.parentElement.setAttribute("onClick", "removetaskitem(event)");
    divBtn.innerHTML = `<i class="fa fa-close"></i>`;
    newitem.append(divBtn);

    // appending newly created element(newitem) to tsklist
    tsklist.append(newitem);
  });

  refreshUI();
});

const handleInput = () => {
  // creating li element
  let newitem = document.createElement("li");

  let div = document.createElement("div"); //for list-item
  let divBtn = document.createElement("div");

  newitem.append(div, divBtn);

  // assigning textContent & className to newitem
  div.textContent = input.value;
  newitem.className = "food-item";
  newitem.className = "flex lead bg-dark text-light rounded text-center px-5 py-3 my-2";

  divBtn.parentElement.setAttribute("onClick", "removetaskitem(event)");
  divBtn.innerHTML = `<i class="fa fa-close"></i>`;
  newitem.append(divBtn);

  // appending newly created element(newitem) to tsklist
  tsklist.append(newitem);

  // set localStorage
  localStorage.setItem(
    localStorageKey,
    JSON.stringify([
      ...JSON.parse(localStorage.getItem(localStorageKey) || "[]"),
      { taskItem: input.value },
    ])
  );

  // resetting the input value
  input.value = "";

  refreshUI();
};

inputBtn.addEventListener("click", handleInput);
btnclr.addEventListener("click",handleclear)

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInput();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    // Undo Operations
    inputFood.value = "";
  }
});

// remove Food items
function removetaskitem(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove();

  // remove from localStorage
  const fetchedFoodItems = [
    ...JSON.parse(localStorage.getItem(localStorageKey)),
  ];

  fetchedFoodItems.forEach((item) => {
    if (item.taskItem === existingList.innerText) {
      fetchedFoodItems.splice(fetchedFoodItems.indexOf(item), 1);
      // remove from localStorage
    }
  });

  localStorage.setItem(localStorageKey, JSON.stringify(fetchedFoodItems));

  refreshUI();
}

function refreshUI () {
    if (list.children.length > 0){
        emptyimg.hidden = true
    }
    else{
        emptyimg.hidden = false

    }
}
function handleclear(){
    const lis = list.querySelectorAll('li')
    list.remove(lis)
    localStorage.clear()
    refreshUI();}
