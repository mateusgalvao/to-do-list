//getting all required elements || obtendo todos os elementos necessários

const inputBox = document.querySelector("");
const addBtn = document.querySelector("");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = () => {
    let userData = inputBox.value;//getting user entered value | obtendo o valor inserido pelo usuário
    if (userData.trim() != 0){//if user values aren't only spaces | se os valores do usuário não forem apenas espaços

        addBtn.classList.add("active")//active the add button | ative o botão adicionar

    }else{
        addBtn.classList.remove("active")//remove the add button| remova o botão adicionar 
    }
}

//if user click on the add button || se o usuário clicar no botão adicionar
addBtn.onclick = () => {
    let userData = inputBox.value;//getting user entered value | obtendo o valor inserido pelo usuário

    let gettLocalStorage = localStorage.getItem("New todo"); //getting localstorage
    if(gettLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array 
    }else{
        listArr =JSON.parse(gettLocalStorage); //transforming json string into a js object
    }
    listArr.push(userData); // pushing or adding user data 
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks();
}

function showTasks(){
    let gettLocalStorage = localStorage.getItem("New Todo");//getting localstorage
    if(gettLocalStorage == null){ // if localstorage is null
        listArr = []; //creating blank array
    }else{
        listArr =JSON.parse(gettLocalStorage); //transforming json string into a js object
    }
    let newLitag = ``;
    listArr.forEach((element,index) => {
        newLitag += 
        `<li> ${element} <span> <i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLitag; //adding new li tag inside ul tag
}






