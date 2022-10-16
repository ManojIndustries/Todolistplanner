const input = document.getElementById("inputdata");
const addBtn = document.getElementById("btnadd");
const list = document.getElementById("list");
const rmbtn = document.getElementsByClassName("rmv")
const btnclr =document.getElementById("btnclr")
const cradbody = document.getElementById("cardbody")
const emptyimg = document.getElementById("emptyimg")

const localStoragekey = "Taskitems"

document.addEventListener("DOMContentLoaded", () => {
    const fetchtask = [... JSON.parse(localStorage.getItem("Taskitems"))]
    // console.log(fetchtask);

    fetchtask.forEach((item) => {
        let li = document.createElement("li");
        let xdiv =document.createElement("div")
        // let fawe = xdiv.getElementsByTagName('i')
        // fawe.className = "fa fa-car"
        // // xdiv.tagName = 'i'
        xdiv.innerHTML = '<i class = "fa fa-car"></i>'
        xdiv.setAttribute("onClick","removebtn(event)")
        li.textContent = item.Taskitem;
        li.className = "flex lead bg-dark text-light rounded text-center px-5 py-3 my-2";
        // li.id = 'rmvclr'
        // xdiv.append(xstr)
        li.append(xdiv)
        list.append(li);
        
        refreshui()
    })
})

const handlelist = () =>{
    let li = document.createElement("li");
    let xdiv =document.createElement("div")
    // let fawe = xdiv.getElementsByTagName('div');
    // fawe.setAttribute = ("src", "./images/images.jfif")
    xdiv.innerHTML = '<i class="fa fa-car"></i>'
    // xdiv.append(fawe)
    // console.log(fawe.className);
    // xdiv.textContent = 'x'
    xdiv.setAttribute("onClick","removebtn(event)")
    li.textContent = input.value;
    li.className = "flex lead bg-dark text-light rounded text-center px-5 py-3 my-2";
    // li.id = 'rmvclr'
    // xdiv.append(xstr)
    li.append(xdiv)
    list.append(li);
    localStorage.setItem(
        "Taskitems",JSON.stringify(
        [...JSON.parse(localStorage.getItem("Taskitems") || "[]"),
        { Taskitem: input.value},]
    ))
    input.value = "";
    refreshui()
};

addBtn.addEventListener('click', handlelist)

function removebtn(event) {
    let rmv = event.target.parentNode; 
    rmv.remove()
    
    const fetchtsk = [
        ...JSON.parse(localStorage.getItem(localStoragekey)),
      ];
    
      fetchtsk.forEach((item) => {
        if (item.Taskitem === rmv.innerText) {
          fetchtsk.splice(fetchtsk.indexOf(item), 1);
          // remove from localStorage
        }
      });
    // console.log(rmv.innerText);

    // localStorage.setItem("TaskItems", JSON.stringify(fetchtsk))


    refreshui()
}
input.addEventListener("keyup", (event) =>{
    if(input.value.length > 0){
        if (event.key === 'Enter') {
            handlelist()
        }
    }
    if(event.key === "z"){
        input.value = "";
    }
})
function handleclear(){
    const lis = list.querySelectorAll('li')
    list.remove(lis)
    refreshui();
}
btnclr.addEventListener("click",handleclear)
list.addEventListener('click', (event) => {
    console.log(event);
})

list.addEventListener("keyup", (event) => {
    if (event.key === 'x') {
        console.log(event);
    }
})

function refreshui () {
    if (list.children.length > 0){
        emptyimg.hidden = true
    }
    else{
        emptyimg.hidden = false

    }
}




















// let inputFood = document.getElementById("input-food");
// let inputBtn = document.getElementById("input-btn");
// let foodContainer = document.getElementById("food-container");

// inputBtn.addEventListener("click", () => {
//   // creating li element
//   let newFoodItemEl = document.createElement("li");

//   // creating food items comment
//   let foodItemElComment = document.createComment("Food items");

//   // appending comment
//   foodContainer.append(foodItemElComment);

//   // assigning textContent & className to newFoodItemEl
//   newFoodItemEl.textContent = inputFood.value;
//   newFoodItemEl.className = "food-item";

//   // appending newly created element(newFoodItemEl) to foodContainer
//   foodContainer.append(newFoodItemEl);

//   // resetting the inputFood value
//   inputFood.value = "";

//   // or do it via templates here
//   //   foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
// });

// // QuerySelectors
// const foodItemEl = document.querySelector("li");