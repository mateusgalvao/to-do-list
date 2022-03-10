//getting all required elements || obtendo todos os elementos necessários

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = () => {
    let userData = inputBox.value;//getting user entered value | obtendo o valor inserido pelo usuário
    if (userData.trim() != 0){//if user values aren't only spaces | se os valores do usuário não forem apenas espaços

        addBtn.classList.add("active")//active the add button | ative o botão adicionar

    }else{
        addBtn.classList.remove("active")//remove the add button| remova o botão adicionar 
    }
};
showTasks()

//if user click on the add button || se o usuário clicar no botão adicionar
addBtn.onclick = () => {
    let userData = inputBox.value;//getting user entered value | obtendo o valor inserido pelo usuário
    let getLocalStorage = localStorage.getItem("New todo"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array 
    }else{
        listArr =JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    listArr.push(userData); // pushing or adding user data 
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");//getting localstorage
    if(getLocalStorage == null){ // if localstorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }  
    let newLitag = '';
    listArr.forEach((element, index )=> {
        newLitag += `<li>${element}  <span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
       
    });
    todoList.innerHTML = listArr; //adding new li tag inside ul tag
    inputBox.value = "";
}
 
//deletar
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}




